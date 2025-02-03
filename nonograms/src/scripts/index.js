import '../style.scss';
import {
  switchColorPixel,
  getCoordinates,
  findCross,
  clear,
} from './eventHandlers.js';
import { container, main, menu } from './createPageElements.js';
import { createScheme } from './createElementFunctions.js';
import { nonograms } from './dataImg.js';
import { checkSolution, congratulate, oops } from './logicalFunctions.js';

let currentScheme = nonograms[0];
console.log('Для проверяющего: ', currentScheme.scheme.img);

let userAnswer = Array.from({ length: 5 }).map((item) =>
  Array.from({ length: 5 }).fill(0)
);

menu.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.nav__link')) {
    const link = target.textContent;

    currentScheme = nonograms.filter((item) => item.name === link)[0];
    main.innerHTML = '';
    createScheme(currentScheme, main);

    const scheme = document.querySelector('.scheme');
    const schemeField = document.querySelector('.scheme__field');
    const controllsCheck = document.querySelector('.button__check');
    let controllsReset = document.querySelector('.button__reset');

    schemeField.addEventListener('click', (event) => {
      const target = event.target.closest('.pixel');

      if (target) {
        switchColorPixel(target);
        const [row, col] = getCoordinates(target);
        userAnswer[row][col] = +!userAnswer[row][col];
      }
    });

    schemeField.addEventListener('contextmenu', (event) => {
      const target = event.target.closest('.pixel');

      if (target) {
        const cross = findCross(target);
        cross.classList.toggle('cross--hidden');

        target.classList.remove('pixel--black');
      }

      event.preventDefault();
    });

    controllsCheck.addEventListener('click', () => {
      const conclusion = checkSolution(userAnswer, currentScheme.scheme.img);
      if (conclusion) {
        congratulate(container);
      } else {
        oops(scheme);
      }

      controllsCheck.disabled = true;
      setTimeout(() => (controllsCheck.disabled = false), 2000);
    });

    controllsReset.addEventListener('click', () => {
      userAnswer = [...clear()];
    });
  }
});

const initialClick = document.querySelector('.nav__link:first-child');
initialClick.click();

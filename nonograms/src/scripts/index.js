import '../style.scss';
import {
  switchColorPixel,
  getCoordinates,
  findCross,
  clear,
} from './eventHandlers.js';
import { container, main, menu, header } from './createPageElements.js';
import { createScheme } from './createElementFunctions.js';
import { nonograms } from './dataImg.js';
import {
  checkSolution,
  congratulate,
  oops,
  playSound,
} from './logicalFunctions.js';
import {
  clearPixelSound,
  wonSound,
  failSound,
  setBlackPixelSound,
  setCrossSound,
  setNewScheme,
  clearField,
} from './sounds.js';

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
    playSound(setNewScheme);

    const scheme = document.querySelector('.scheme');
    const schemeField = document.querySelector('.scheme__field');
    const controllsCheck = document.querySelector('.button__check');
    let controllsReset = document.querySelector('.button__reset');

    schemeField.addEventListener('click', (event) => {
      const target = event.target.closest('.pixel');

      if (target) {
        if (target.classList.contains('pixel--black')) {
          playSound(clearPixelSound);
        } else {
          playSound(setBlackPixelSound);
        }

        switchColorPixel(target);
        const [row, col] = getCoordinates(target);
        userAnswer[row][col] = +!userAnswer[row][col];
      }
    });

    schemeField.addEventListener('contextmenu', (event) => {
      const target = event.target.closest('.pixel');

      if (target) {
        const cross = findCross(target);

        if (cross.classList.contains('cross--hidden')) {
          playSound(setCrossSound);
        } else {
          playSound(clearPixelSound);
        }

        cross.classList.toggle('cross--hidden');
        target.classList.remove('pixel--black');
      }

      event.preventDefault();
    });

    controllsCheck.addEventListener('click', () => {
      const conclusion = checkSolution(userAnswer, currentScheme.scheme.img);
      if (conclusion) {
        congratulate(container);
        playSound(wonSound);
      } else {
        oops(scheme);
        playSound(failSound);
      }

      controllsCheck.disabled = true;
      setTimeout(() => (controllsCheck.disabled = false), 2000);
    });

    controllsReset.addEventListener('click', () => {
      userAnswer = [...clear()];
      clearField.play();
    });
  }
});

const initialClick = document.querySelector('.nav__link:first-child');
initialClick.click();

import '../style.scss';
import {
  switchColorPixel,
  getCoordinates,
  findCross,
} from './eventHandlers.js';
import {
  container,
  scheme,
  schemeField,
  controllsCheck,
  controllsReset,
} from './createPageElements.js';
import { nonogram } from './dataImg.js';
import { checkSolution, congratulate, oops } from './logicalFunctions.js';

const userAnswer = Array.from({ length: 5 }).map((item) =>
  Array.from({ length: 5 }).fill(0)
);

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
  const conclusion = checkSolution(userAnswer, nonogram.img);
  if (conclusion) {
    congratulate(container);
  } else {
    oops(scheme);
  }
});

import '../style.scss';
import {
  switchColorPixel,
  getCoordinates,
  findCross,
} from './eventHandlers.js';
import { schemeField } from './createPageElements.js';

const userSolution = Array.from({ length: 5 }).map((item) =>
  Array.from({ length: 5 }).fill(0)
);

schemeField.addEventListener('click', (event) => {
  const target = event.target.closest('.pixel');

  if (target) {
    switchColorPixel(target);
    const [row, col] = getCoordinates(target);
    userSolution[row][col] = +!userSolution[row][col];
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

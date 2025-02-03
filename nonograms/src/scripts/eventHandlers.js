import { createElement } from './createElementFunctions';

export function switchColorPixel(target) {
  target.classList.toggle('pixel--black');

  const cross = findCross(target);
  cross.classList.add('cross--hidden');
}

export function findCross(target) {
  return target.querySelector('.cross') || target.closest('.cross');
}

export function getCoordinates(target) {
  const strCoordinates = target.dataset.locate;
  return strCoordinates.split('').map((item) => +item);
}

export function clear() {
  const imgPixels = document.querySelectorAll('.pixel-img');
  imgPixels.forEach((pixel) => pixel.classList.remove('pixel--black'));

  const cross = document.querySelectorAll('.cross');
  cross.forEach((item) => item.classList.add('cross--hidden'));

  return Array.from({ length: 5 }).map((item) =>
    Array.from({ length: 5 }).fill(0)
  );
}

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

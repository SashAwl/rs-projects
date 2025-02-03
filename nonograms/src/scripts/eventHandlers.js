import { createElement } from './createElementFunctions';

export function pixelClickHandler(event, matrix, blackSounds, whiteSounds) {
  const target = event.target.closest('.pixel');

  if (target) {
    if (target.classList.contains('pixel--black')) {
      playSound(whiteSounds);
    } else {
      playSound(blackSounds);
    }

    switchColorPixel(target);
    const [row, col] = getCoordinates(target);
    matrix[row][col] = +!matrix[row][col];
  }
}

export function contextClickHandler(event, crossSound, whiteSound) {
  const target = event.target.closest('.pixel');

  if (target) {
    const cross = findCross(target);

    if (cross.classList.contains('cross--hidden')) {
      playSound(crossSound);
    } else {
      playSound(whiteSound);
    }

    cross.classList.toggle('cross--hidden');
    target.classList.remove('pixel--black');
  }

  event.preventDefault();
}

function switchColorPixel(target) {
  target.classList.toggle('pixel--black');

  const cross = findCross(target);
  cross.classList.add('cross--hidden');
}

function findCross(target) {
  return target.querySelector('.cross') || target.closest('.cross');
}

function getCoordinates(target) {
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

export function playSound(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

export function showConsolution(
  answer,
  solution,
  wonSound,
  failSound,
  parent1,
  parent2,
  button
) {
  const conclusion = checkSolution(answer, solution);

  if (conclusion) {
    congratulate(parent1);
    playSound(wonSound);
  } else {
    oops(parent2);
    playSound(failSound);
  }

  button.disabled = true;
  setTimeout(() => (button.disabled = false), 2000);
}

function checkSolution(userAnswerMatrix, solutionMatrix) {
  const answerStr = userAnswerMatrix.reduce(
    (accom, row) => accom + row.join(''),
    ''
  );

  const solutionStr = solutionMatrix.reduce(
    (accom, row) => accom + row.join(''),
    ''
  );
  return answerStr === solutionStr;
}

function congratulate(parentElem) {
  const backHooray = createElement({
    tag: 'div',
    text: '',
    parent: parentElem,
    classes: ['back-hooray'],
  });

  const hooray = createElement({
    tag: 'div',
    text: '',
    parent: parentElem,
    classes: ['hooray'],
  });

  const hoorayHead = createElement({
    tag: 'h1',
    text: 'Great!',
    parent: hooray,
    classes: ['hooray__heading'],
  });

  const hoorayText = createElement({
    tag: 'h3',
    text: 'You have solved the nonogram!',
    parent: hooray,
    classes: ['hooray__text'],
  });

  const playAgainButton = createElement({
    tag: 'button',
    text: 'Play again',
    parent: hooray,
    classes: ['button', 'hooray__again'],
  });
}

function oops(parentElem) {
  const oops = createElement({
    tag: 'p',
    text: 'Oops! You made a mistake. Try again!',
    parent: parentElem,
    classes: ['oops'],
  });

  setTimeout(() => {
    oops.classList.add('hide-message');

    setTimeout(() => oops.remove(), 1000);
  }, 2000);
}

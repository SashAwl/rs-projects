import { createElement } from './createElementFunctions';
import { showHoorayMessage, formatTime } from './timer.js';

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
  button,
  isForsedCheck
) {
  const conclusion = checkSolution(answer, solution);

  if (conclusion) {
    const gameTime = showHoorayMessage();
    congratulate(parent1, gameTime);
    playSound(wonSound);
  } else if (isForsedCheck) {
    setMessage(parent2, 'Oops! You made a mistake. Try again!');
    playSound(failSound);

    button.disabled = true;
    setTimeout(() => (button.disabled = false), 2000);
  }
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

function congratulate(parentElem, time) {
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
    text: `You have solved the nonogram in ${time} seconds!`,
    parent: hooray,
    classes: ['hooray__text'],
  });

  const playAgainButton = createElement({
    tag: 'button',
    text: 'Play again',
    parent: hooray,
    classes: ['button', 'hooray__again'],
  });

  playAgainButton.addEventListener('click', () => {
    hooray.remove();
    backHooray.remove();
  });
}

export function setMessage(parentElem, text) {
  parentElem.innerHtml = ';';

  const message = createElement({
    tag: 'p',
    text: text,
    parent: parentElem,
    classes: ['message'],
  });

  setTimeout(() => {
    message.classList.add('hide-message');

    setTimeout(() => message.remove(), 1000);
  }, 2000);
}

export function showSolution({ matrix, time }) {
  markPixels(matrix);
  setTime(time);
}

function markPixels(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if (matrix[i][j]) {
        const pixel = document.querySelector(
          `.pixel-img[data-locate="${'' + i + j}"]`
        );
        pixel.classList.add('pixel--black');
      }
    }
  }
}

function setTime(seconds) {
  if (seconds) {
    const timer = document.querySelector('.timer');
    timer.textContent = formatTime(seconds);
  }
}

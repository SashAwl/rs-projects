import { createElement, setScheme } from './createElementFunctions';
import {
  startTimer,
  stopTimer,
  showHoorayMessage,
  formatTime,
  resetTimer,
} from './timer.js';

export function initialGame(dataScheme, userAns, initialData, isForsedCheck) {
  const { elements, sounds } = initialData;
  const { soundNew, soundBlack, soundWhite, soundCross, soundFail, soundWon } =
    sounds;
  const { timer, container, main } = elements;

  setScheme(dataScheme, timer);
  stopTimer();
  resetTimer(timer);
  playSound(soundNew);

  const schemeField = document.querySelector('.scheme__field');
  const blockButtons = document.querySelectorAll('.button--block');
  schemeField.classList.remove('click-block');
  blockButtons.forEach((item) => item.classList.remove('click-block'));

  schemeField.addEventListener('click', (event) => {
    pixelClickHandler(event, userAns, soundBlack, soundWhite);
    startTimer(timer);

    showConsolution(
      userAns,
      dataScheme,
      soundWon,
      soundFail,
      container,
      main,
      false
    );
  });

  schemeField.addEventListener('contextmenu', (event) => {
    contextClickHandler(event, userAns, soundCross, soundWhite);
    startTimer(timer);
  });
}

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
    const currentPixel = matrix[row][col];
    if (currentPixel === 'x') {
      matrix[row][col] = 1;
    } else {
      matrix[row][col] = +!matrix[row][col];
    }
  }
}

export function contextClickHandler(event, matrix, crossSound, whiteSound) {
  const target = event.target.closest('.pixel');
  const [row, col] = getCoordinates(target);

  if (target) {
    const cross = findCross(target);

    if (cross.classList.contains('cross--hidden')) {
      playSound(crossSound);
      matrix[row][col] = 'x';
    } else {
      playSound(whiteSound);
      matrix[row][col] = 0;
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

export function clear(len) {
  const imgPixels = document.querySelectorAll('.pixel-img');
  imgPixels.forEach((pixel) => pixel.classList.remove('pixel--black'));

  const cross = document.querySelectorAll('.cross');
  cross.forEach((item) => item.classList.add('cross--hidden'));

  const arr = Array.from({ length: len }).map((item) =>
    Array.from({ length: len }).fill(0)
  );
  return arr;
}

export function playSound(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

export function showConsolution(
  answer,
  gameDetails,
  wonSound,
  failSound,
  parent1,
  parent2,
  isForsedCheck
) {
  const { name, level, scheme: solution } = gameDetails;
  const conclusion = checkSolution(answer, solution.img);

  if (conclusion) {
    const gameTime = showHoorayMessage();
    congratulate(parent1, formatTime(gameTime));
    playSound(wonSound);
    saveWonDetails(name, level, gameTime);

    const schemeField = document.querySelector('.scheme__field');
    const blockButtons = document.querySelectorAll('.button--block');
    schemeField.classList.add('click-block');
    blockButtons.forEach((item) => item.classList.add('click-block'));
  } else if (isForsedCheck) {
    setMessage(parent2, 'Oops! You made a mistake. Try again!');
    playSound(failSound);

    const button = document.querySelector('.button__check');
    button.disabled = true;
    setTimeout(() => (button.disabled = false), 2000);
  }
}

function checkSolution(userAnswerMatrix, solutionMatrix) {
  const answerStr = userAnswerMatrix.reduce((accom, row) => {
    const cleanRow = row.map((item) => (item === 'x' ? 0 : item));
    return accom + cleanRow.join('');
  }, '');

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
      const cell = matrix[i][j];
      const locatePixel = `.pixel-img[data-locate="${'' + i + j}"]`;
      const pixel = document.querySelector(locatePixel);
      if (!cell) {
        pixel.classList.remove('pixel--black');
      } else if (cell === 1) {
        pixel.classList.add('pixel--black');
      } else {
        const cross = findCross(pixel);
        cross.classList.remove('cross--hidden');
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

function saveWonDetails(nameGame, levelGame, timeGame) {
  const dataTable = localStorage.getItem('resultTable');
  const dataList = JSON.parse(dataTable);
  const gameItem = {
    name: nameGame,
    level: levelGame,
    time: timeGame,
  };

  dataList.push(gameItem);

  const lastResults = dataList.slice(-5);
  localStorage.setItem('resultTable', JSON.stringify(lastResults));
}

export function sortData(array, key) {
  return array.sort((a, b) => (b[key] < a[key] ? 1 : -1));
}

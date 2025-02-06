import '../style.scss';
import {
  clear,
  showConsolution,
  setMessage,
  showSolution,
  sortData,
  initialGame,
} from './eventHandlers.js';
import {
  container,
  main,
  menu,
  messageBox,
  nav,
  burger,
  timerLine,
  topResults,
  header,
  theme,
} from './createPageElements.js';
import { createTable } from './createElementFunctions.js';
import { nonograms } from './dataImg.js';
import {
  clearPixelSound,
  wonSound,
  failSound,
  setBlackPixelSound,
  setCrossSound,
  setNewScheme,
  clearField,
} from './sounds.js';
import {
  startTimer,
  stopTimer,
  resetTimer,
  secondsElapsed,
  formatTime,
} from './timer.js';

localStorage.setItem('resultTable', '[]');

let currentSchemeData = nonograms[0];
console.log('Для проверяющего: ', currentSchemeData.scheme.img);

let userAnswer = Array.from({ length: 5 }).map((item) =>
  Array.from({ length: 5 }).fill(0)
);

const initialGameData = {
  elements: {
    timer: timerLine,
    container: container,
    main: main,
  },
  sounds: {
    soundNew: setNewScheme,
    soundBlack: setBlackPixelSound,
    soundWhite: clearPixelSound,
    soundCross: setCrossSound,
    soundFail: failSound,
    soundWon: wonSound,
  },
};

initialGame(currentSchemeData, userAnswer, initialGameData, false);

menu.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.nav__link')) {
    const link = target.textContent;

    currentSchemeData = nonograms.filter((item) => item.name === link)[0];
    console.log('Для проверяющего: ', currentSchemeData.scheme.img);

    userAnswer = [...clear()];
    initialGame(currentSchemeData, userAnswer, initialGameData, false);
  }
});

burger.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove('nav--open');
  }
});

const controllsCheck = document.querySelector('.button__check');
const controllsReset = document.querySelector('.button__reset');
const controllsSave = document.querySelector('.button__save');
const controllsRestoreGame = document.querySelector('.button__restore');
const controllsShowSolution = document.querySelector('.button__show-solution');
const schemeField = document.querySelector('.scheme__field');
const blockButtons = document.querySelectorAll('.button--block');

controllsCheck.addEventListener('click', () => {
  showConsolution(
    userAnswer,
    currentSchemeData,
    wonSound,
    failSound,
    container,
    main,
    true
  );
});

controllsReset.addEventListener('click', () => {
  userAnswer = [...clear()];
  clearField.play();
  initialGame(currentSchemeData, userAnswer, initialGameData, false);
});

controllsSave.addEventListener('click', () => {
  const gameData = JSON.stringify({
    name: currentSchemeData.name,
    matrix: userAnswer,
    time: secondsElapsed,
  });
  localStorage.setItem('lastGame', gameData);

  setMessage(messageBox, 'Saved successfully!');
});

controllsRestoreGame.addEventListener('click', () => {
  const savedGame = localStorage.getItem('lastGame');

  if (savedGame) {
    const game = JSON.parse(savedGame);
    userAnswer = [...game.matrix];
    currentSchemeData = nonograms.filter((item) => item.name === game.name)[0];
    console.log('Для проверяющего: ', currentSchemeData.scheme.img);

    initialGame(currentSchemeData, userAnswer, initialGameData, false);
    showSolution(game);
    startTimer(timerLine, game.time);
  } else {
    setMessage(messageBox, 'There are no saved games for this scheme');
  }
});

controllsShowSolution.addEventListener('click', () => {
  const solution = { matrix: currentSchemeData.scheme.img, time: null };
  clear();
  showSolution(solution);
  stopTimer();
  resetTimer(timerLine);

  const schemeField = document.querySelector('.scheme__field');
  const blockButtons = document.querySelectorAll('.button--block');
  const resetButton = document.querySelector('.button__reset');

  schemeField.classList.add('click-block');
  [controllsCheck, controllsSave, controllsShowSolution].forEach((item) =>
    item.classList.add('click-block')
  );
});

topResults.addEventListener('click', (event) => {
  const dataList = JSON.parse(localStorage.getItem('resultTable'));
  dataList.forEach((item) => (item.time = formatTime(item.time).slice(-5)));
  const sortedData = sortData(dataList, 'time');
  createTable(header, sortedData);
  event.stopPropagation();
});

container.addEventListener('click', (event) => {
  const table = document.querySelector('.table');

  if (table && !event.target.closest('.table')) {
    const back = document.querySelector('.back-hooray');

    back.remove();
    table.remove();
  }
});

const heading = document.querySelector('.scheme__heading');
theme.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => item.classList.toggle('pixel--dark-theme'));

  const controlls = document.querySelectorAll('.scheme__controlls>button');
  controlls.forEach((item) =>
    item.classList.toggle('scheme__controlls--dark-theme')
  );

  container.classList.toggle('main-wrapper--dark-theme');
  schemeField.classList.toggle('pixel--dark-theme');
  heading.classList.toggle('scheme__heading--dark-theme');
  timerLine.classList.toggle('timer--dark-theme');
});

import '../style.scss';
import {
  pixelClickHandler,
  contextClickHandler,
  clear,
  playSound,
  showConsolution,
  setMessage,
  showSolution,
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
} from './createPageElements.js';
import { setScheme, createTable } from './createElementFunctions.js';
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

setScheme(currentSchemeData, timerLine);

const schemeField = document.querySelector('.scheme__field');
schemeField.addEventListener('click', (event) => {
  pixelClickHandler(event, userAnswer, setBlackPixelSound, clearPixelSound);
  startTimer(timerLine);

  showConsolution(
    userAnswer,
    currentSchemeData,
    wonSound,
    failSound,
    container,
    main,
    controllsCheck,
    false
  );
});

schemeField.addEventListener('contextmenu', (event) => {
  contextClickHandler(event, setCrossSound, clearPixelSound);
  startTimer(timerLine);
});

menu.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.nav__link')) {
    const link = target.textContent;

    currentSchemeData = nonograms.filter((item) => item.name === link)[0];
    console.log('Для проверяющего: ', currentSchemeData.scheme.img);

    setScheme(currentSchemeData, timerLine);
    userAnswer = [...clear()];
    resetTimer(timerLine);
    playSound(setNewScheme);

    const schemeField = document.querySelector('.scheme__field');

    schemeField.addEventListener('click', (event) => {
      pixelClickHandler(event, userAnswer, setBlackPixelSound, clearPixelSound);
      startTimer(timerLine);

      showConsolution(
        userAnswer,
        currentSchemeData,
        wonSound,
        failSound,
        container,
        main,
        controllsCheck,
        false
      );
    });

    schemeField.addEventListener('contextmenu', (event) => {
      contextClickHandler(event, setCrossSound, clearPixelSound);
      startTimer(timerLine);
    });
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

controllsCheck.addEventListener('click', () => {
  showConsolution(
    userAnswer,
    currentSchemeData,
    wonSound,
    failSound,
    container,
    main,
    controllsCheck,
    true
  );
});

controllsReset.addEventListener('click', () => {
  userAnswer = [...clear()];
  clearField.play();
  stopTimer();
  resetTimer(timerLine);
});

controllsSave.addEventListener('click', () => {
  const gameData = JSON.stringify({ matrix: userAnswer, time: secondsElapsed });
  localStorage.setItem(currentSchemeData.name, gameData);

  setMessage(messageBox, 'Saved successfully!');
});

controllsRestoreGame.addEventListener('click', () => {
  const savedGame = localStorage.getItem(currentSchemeData.name);

  if (savedGame) {
    const game = JSON.parse(savedGame);
    userAnswer = [...game.matrix];
    showSolution(game);
  } else {
    setMessage(messageBox, 'There are no saved games for this scheme');
  }
});

controllsShowSolution.addEventListener('click', () => {
  const solution = { matrix: currentSchemeData.scheme.img, time: null };
  showSolution(solution);
  setTimeout(() => {
    clear();
  }, 200);
});

topResults.addEventListener('click', (event) => {
  const dataList = JSON.parse(localStorage.getItem('resultTable'));
  dataList.forEach((item) => (item.time = formatTime(item.time).slice(-5)));
  createTable(header, dataList);
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

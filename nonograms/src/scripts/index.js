import '../style.scss';
import {
  pixelClickHandler,
  contextClickHandler,
  clear,
  playSound,
  showConsolution,
} from './eventHandlers.js';
import { container, main, menu, header } from './createPageElements.js';
import { setScheme } from './createElementFunctions.js';
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

let currentSchemeData = nonograms[0];
console.log('Для проверяющего: ', currentSchemeData.scheme.img);

let userAnswer = Array.from({ length: 5 }).map((item) =>
  Array.from({ length: 5 }).fill(0)
);

setScheme(currentSchemeData, main);
playSound(setNewScheme);

const schemeField = document.querySelector('.scheme__field');
schemeField.addEventListener('click', (event) => {
  pixelClickHandler(event, userAnswer, setBlackPixelSound, clearPixelSound);
});

schemeField.addEventListener('contextmenu', (event) => {
  contextClickHandler(event, setCrossSound, clearPixelSound);
});

menu.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.nav__link')) {
    const link = target.textContent;

    currentSchemeData = nonograms.filter((item) => item.name === link)[0];
    setScheme(currentSchemeData, main);
    playSound(setNewScheme);

    const schemeField = document.querySelector('.scheme__field');

    schemeField.addEventListener('click', (event) => {
      pixelClickHandler(event, userAnswer, setBlackPixelSound, clearPixelSound);
    });

    schemeField.addEventListener('contextmenu', (event) => {
      contextClickHandler(event, setCrossSound, clearPixelSound);
    });
  }
});

const controllsCheck = document.querySelector('.button__check');
const controllsReset = document.querySelector('.button__reset');

controllsCheck.addEventListener('click', () => {
  showConsolution(
    userAnswer,
    currentSchemeData.scheme.img,
    wonSound,
    failSound,
    container,
    main,
    controllsCheck
  );
});

controllsReset.addEventListener('click', () => {
  userAnswer = [...clear()];
  clearField.play();
});

controllsSave.addEventListener('click', () => {});

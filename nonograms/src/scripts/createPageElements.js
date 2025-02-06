import {
  createElement,
  createControlls,
  createBurger,
  createMenu,
} from './createElementFunctions.js';
import { nonograms } from './dataImg.js';

const tytle = document.querySelector('title');
tytle.textContent = 'Nonogram pazzle';

export const container = createElement({
  tag: 'div',
  text: '',
  parent: document.body,
  classes: ['container'],
});

export const header = createElement({
  tag: 'div',
  text: '',
  parent: container,
  classes: ['header'],
});
export const topResults = createElement({
  tag: 'button',
  text: 'Last results',
  parent: header,
  classes: ['button', 'button-header', 'button-best'],
});

export const theme = createElement({
  tag: 'button',
  text: 'Theme',
  parent: header,
  classes: ['button', 'button-header', 'button-theme'],
});

export const burger = createBurger(header);

const mainWrapper = createElement({
  tag: 'div',
  text: '',
  parent: container,
  classes: ['main-wrapper'],
});

export const nav = createElement({
  tag: 'nav',
  text: '',
  parent: mainWrapper,
  classes: ['nav'],
});

const easyList = nonograms.filter((item) => item.level === 'Easy');
createMenu(easyList, 'Easy', nav);

const mediumList = nonograms.filter((item) => item.level === 'Medium');
createMenu(mediumList, 'Medium', nav);

const HardList = nonograms.filter((item) => item.level === 'Hard');
createMenu(HardList, 'Hard', nav);

export const main = createElement({
  tag: 'main',
  text: '',
  parent: mainWrapper,
  classes: ['main'],
});

export const timerLine = createElement({
  tag: 'p',
  text: 'time: 00:00',
  parent: main,
  classes: ['timer'],
});

const controlls = createControlls(main);

export const messageBox = createElement({
  tag: 'div',
  text: '',
  parent: main,
  classes: ['message-box'],
});

const footer = createElement({
  tag: 'footer',
  text: '',
  parent: container,
  classes: ['footer'],
});

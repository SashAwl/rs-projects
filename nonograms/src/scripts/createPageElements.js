import {
  createElement,
  createControlls,
  createBurger,
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

export const menu = createElement({
  tag: 'details',
  text: '',
  parent: nav,
  classes: ['nav__box'],
});
menu.setAttribute('open', true);

const summary = createElement({
  tag: 'summary',
  text: 'Level "Easy"',
  parent: menu,
  classes: ['nav__summary'],
});

const easySchemeList = createElement({
  tag: 'ul',
  text: '',
  parent: menu,
  classes: ['nav__list'],
});

nonograms.forEach((item) => {
  const easyItem = createElement({
    tag: 'li',
    text: '',
    parent: easySchemeList,
    classes: ['nav__item'],
  });

  const easyItemLink = createElement({
    tag: 'a',
    text: item.name,
    parent: easyItem,
    classes: ['nav__link'],
  });
  easyItemLink.setAttribute('href', '#');
});

export const main = createElement({
  tag: 'main',
  text: '',
  parent: mainWrapper,
  classes: ['main'],
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

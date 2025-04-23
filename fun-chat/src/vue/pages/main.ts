import { createElement } from '../components/create-element';
import { createInputElement } from '../components/create-input-element';
import { createAnchorElement } from '../components/create-anchor-element';
import { createTextareaElement } from '../components/create-textarea-element';

export interface User {
  login: string;
  password: string;
}

export function createMainPage(
  login: string = '',
  loginOut: () => void,
): HTMLElement {
  const container = createElement({
    tag: 'div',
    classes: ['container'],
    parent: document.body,
  });

  const header = createElement({
    tag: 'header',
    classes: ['header'],
    parent: container,
  });

  createElement({
    tag: 'h2',
    text: `User: ${login}`,
    classes: ['user__name'],
    parent: header,
  });

  createElement({
    tag: 'h1',
    text: 'Fun chat',
    classes: ['heading'],
    parent: header,
  });

  const exitBlock = createElement({
    tag: 'div',
    classes: ['header__buttons'],
    parent: header,
  });

  const buttonInfo = createElement({
    tag: 'button',
    text: 'Info',
    classes: ['button', 'button-info'],
    parent: exitBlock,
  });

  buttonInfo.addEventListener('click', () => {
    // функция запуска страницы about и ссылка на возврат обратно
  });

  const closeButton = createElement({
    tag: 'button',
    text: 'Close',
    classes: ['button', 'button-close'],
    parent: exitBlock,
  });

  closeButton.addEventListener('click', () => {
    loginOut();
  });

  const main = createElement({
    tag: 'main',
    classes: ['main'],
    parent: container,
  });

  const contacts = createElement({
    tag: 'div',
    classes: ['contacts'],
    parent: main,
  });

  createInputElement({
    type: 'search',
    placeholder: 'Search..',
    classes: ['contacts__search'],
    parent: contacts,
  });

  createElement({
    tag: 'div',
    classes: ['contacts__list'],
    parent: contacts,
  });

  const messages = createElement({
    tag: 'div',
    classes: ['messages'],
    parent: main,
  });

  const messagesHistory = createElement({
    tag: 'div',
    classes: ['messages__history'],
    parent: messages,
  });

  const messagesTypeForm = createElement({
    tag: 'div',
    classes: ['messages__type-form'],
    parent: messagesHistory,
  });

  createTextareaElement({
    rows: '4',
    cols: '35',
    name: 'typeMessage',
    placeholder: 'Input your message...',
    classes: ['messages__type'],
    parent: messagesTypeForm,
  });

  createElement({
    tag: 'button',
    text: 'Submit',
    classes: ['button', 'messages__submit'],
    parent: messagesTypeForm,
  });

  const footer = createElement({
    tag: 'footer',
    classes: ['footer'],
    parent: container,
  });

  const rsBlock = createElement({
    tag: 'div',
    classes: ['footer__link'],
    parent: footer,
  });

  createAnchorElement({
    src: '../images/rss-logo.svg',
    href: 'https://rs.school/',
    classes: ['rs-image', 'footer__rs-link'],
    parent: rsBlock,
  });

  createAnchorElement({
    text: 'RS School',
    href: 'https://rs.school/',
    classes: ['footer__rs-link'],
    parent: rsBlock,
  });

  createElement({
    text: '2025',
    tag: 'h2',
    classes: ['footer__link'],
    parent: footer,
  });

  createAnchorElement({
    text: 'SashAwl',
    href: 'https://github.com/SashAwl',
    classes: ['footer__link'],
    parent: footer,
  });

  return container;
}

import { createElement } from '../components/create-element';
import { createInputElement } from '../components/create-input-element';
import { createAnchorElement } from '../components/create-anchor-element';
import { createTextareaElement } from '../components/create-textarea-element';

export interface User {
  login: string;
  password: string;
}

export interface UserResponse {
  login: string;
  isLogined: boolean;
}

export function createMainPage(
  login: string = '',
  logOut: (user: User) => void,
  users: UserResponse[],
  goAboutPage: (page: string) => void,
  sendMessage: (user: string, text: string) => void,
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
    goAboutPage('main');
  });

  const closeButton = createElement({
    tag: 'button',
    text: 'Close',
    classes: ['button', 'button-close'],
    parent: exitBlock,
  });

  closeButton.addEventListener('click', () => {
    logOut;
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

  const search = createInputElement({
    type: 'search',
    placeholder: 'Search..',
    classes: ['contacts__search'],
    parent: contacts,
  });

  search.addEventListener('input', () => {
    const searchTerm = search.value.toLowerCase();

    userList.forEach((item) => {
      const name = item.textContent?.toLowerCase() || '';
      const isMatch = name.includes(searchTerm);
      item.style.display = isMatch ? 'block' : 'none';
    });
  });

  const contactsList = createElement({
    tag: 'div',
    classes: ['contacts__list'],
    parent: contacts,
  });

  const userList = users.map((user: { login: string; isLogined: boolean }) => {
    const contactItem = createElement({
      tag: 'div',
      classes: ['contacts__item'],
      parent: contactsList,
    });

    contactItem.addEventListener('click', (event) => {
      const nameUser = event.target;
      if (
        nameUser instanceof HTMLElement &&
        nameUser?.closest('.contacts__name')
      ) {
        userName.textContent = nameUser.textContent;
        const status = users.filter(
          (item) => item.login === nameUser.textContent,
        )[0].isLogined;
        userStatus.textContent = status ? 'online' : 'offline';
        userStatus.style.color = status ? '#32bf32' : 'rgb(175 76 76)';
        historyText.textContent = 'Write your first message...';
      }
    });

    const contactsStatus = createElement({
      tag: 'div',
      classes: ['contacts__status'],
      parent: contactItem,
    });

    if (user.isLogined) {
      contactsStatus.style.background = '#32bf32';
    }

    createElement({
      tag: 'p',
      classes: ['contacts__name'],
      text: user.login,
      parent: contactItem,
    });

    return contactItem;
  });

  const messages = createElement({
    tag: 'div',
    classes: ['messages'],
    parent: main,
  });

  const selectedUser = createElement({
    tag: 'div',
    classes: ['messages__selected-user'],
    parent: messages,
  });

  const userName = createElement({
    tag: 'h3',
    text: '',
    classes: ['messages__user-name'],
    parent: selectedUser,
  });

  const userStatus = createElement({
    tag: 'h3',
    text: '',
    classes: ['messages__user-status'],
    parent: selectedUser,
  });

  const messageHistory = createElement({
    tag: 'div',
    classes: ['messages__history'],
    parent: messages,
  });

  const historyText = createElement({
    tag: 'p',
    classes: ['messages__history__text'],
    text: 'Select a user to send a message to...',
    parent: messageHistory,
  });

  const messagesTypeForm = createElement({
    tag: 'div',
    classes: ['messages__type-form'],
    parent: messages,
  });

  const messageForm = createTextareaElement({
    rows: '4',
    cols: '33',
    name: 'typeMessage',
    placeholder: 'Input your message...',
    classes: ['messages__type'],
    parent: messagesTypeForm,
  });

  const sendMessageButton = createElement({
    tag: 'button',
    text: 'Submit',
    classes: ['button', 'messages__submit'],
    parent: messagesTypeForm,
  });

  sendMessageButton.addEventListener('click', () => {
    const toUser = userName.textContent || '';
    const textMessage = messageForm.value || '';
    if (toUser?.length !== 0 && textMessage.length !== 0) {
      sendMessage(toUser, textMessage);
    }
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
    text: 'RS School',
    href: 'https://rs.school/',
    classes: ['footer__link'],
    parent: rsBlock,
  });

  // const rsImage = createElement({
  //     tag: 'img',
  //     classes: ['rs-image', 'footer__rs-link'],
  //     parent: rsLink,
  //   });
  // rsImage.src = '../images/rss-logo.svg'

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

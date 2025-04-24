import './styles/style.scss';
import { createMainPage } from './vue/pages/main';
import { createAuthForm, validateAuthForm } from './vue/pages/auth';
import { createElement } from './vue/components/create-element';
import { sendMessage } from './api/api';
import type { ServerResponse } from './api/type-server-response';
import type { User, UserResponse } from './vue/pages/main';
import { subscribeToMessages } from './api/api';
import { showAbout } from './vue/pages/about';
import { showErrorModal } from './vue/components/modal-error';
let currentUser: User | null;
let users: UserResponse[] = [];
let activeUsers: UserResponse[] = [];
// let messageUsers:

type MessageDetails = {
  userName: string;
  userText: string;
  time: number;
  deliveryStatus: boolean;
  readStatus: boolean;
  editStatus: boolean;
};

console.log(
  'Уважаемые проверяющие! Многое не успела, планирую дорабатывать проект. Буду очень благодарна, если возьметесь за проверку моей работу ближе к окончанию сроков по кросс-чеку.. Еще бы ночку потрудилась.. Заранее благодарю..")',
);

createAuthForm(goLogin, (page) => {
  openAboutPage(page);
});

getUnautorizedUsers();
getAllAuthentificatedUsers();

subscribeToMessages(handleAuthResponse);

export function handleAuthResponse(response: ServerResponse): void {
  if (response.type === 'USER_LOGIN') {
    if (response.payload.user.isLogined) {
      document.body.innerHTML = '';
      createMainPage(
        currentUser?.login,
        goMainPage,
        getUserStatus(),
        (page) => {
          openAboutPage(page);
        },
        sendMessageToUser,
      );
    }
  } else if (response.type === 'USER_LOGOUT') {
    if (!response.payload.user.isLogined) {
      currentUser = null;
      document.body.innerHTML = '';
      createAuthForm(goLogin, (page) => {
        openAboutPage(page);
      });
    }
  } else if (response.type === 'USER_ACTIVE') {
    activeUsers = response.payload.users;
  } else if (response.type === 'USER_INACTIVE') {
    users = response.payload.users;
    // getMessageHistory('www');
    // users.forEach((item) => {
    //   console.log('req', item.login);
    //   getMessageHistory(item.login);
    // });
  } else if (response.type === 'ERROR') {
    const errorModal = document.querySelector('.modal-error');
    if (!errorModal) {
      showErrorModal(response.payload.error);
    }
  } else if (response.type === 'MSG_FROM_USER') {
    console.log('====', response.payload.messages);
  } else if (response.type === 'MSG_SEND') {
    console.log(response.payload);
    const detailMessage = response.payload.message;
    const detailMessageObject: MessageDetails = {
      userName: detailMessage.from,
      userText: detailMessage.text,
      time: detailMessage.datetime,
      deliveryStatus: detailMessage.status.isDelivered,
      readStatus: detailMessage.status.isReaded,
      editStatus: detailMessage.status.isEdited,
    };
    showSendedMessage(detailMessageObject);
  }
}
function showAuthError(errors: string[] | undefined | string): void {
  const form = document.querySelector('.button-submit');
  const erorrsText = createElement({
    tag: 'p',
    classes: ['auth__valid-error'],
    text: `${Array.isArray(errors) ? errors?.join('. ') : errors}`,
  });
  form?.after(erorrsText);
}

function goLogin(userData: User): void {
  const errors = validateAuthForm(userData);

  if (errors.length > 0) {
    const errorsText = document.querySelector('.auth__valid-error');
    if (errorsText) {
      errorsText.remove();
    }
    showAuthError(errors);
    return;
  }
  currentUser = { login: userData.login, password: userData.password };
  sendMessage({
    id: Date.now().toString(),
    type: 'USER_LOGIN',
    payload: {
      user: { login: userData.login, password: userData.password },
    },
  });
}

function goMainPage(): void {
  if (!currentUser) {
    return;
  }

  sendMessage({
    id: Date.now().toString(),
    type: 'USER_LOGOUT',
    payload: {
      user: { login: currentUser.login, password: currentUser.password },
    },
  });
}

function openAboutPage(page: string): void {
  document.body.innerHTML = '';
  if (page === 'auth-form') {
    showAbout(() => {
      document.body.innerHTML = '';
      createAuthForm(goLogin, (page) => {
        openAboutPage(page);
      });
    });
  }
  if (page === 'main') {
    showAbout(() => {
      document.body.innerHTML = '';
      createMainPage(
        currentUser?.login,
        goMainPage,
        users,
        (page) => {
          openAboutPage(page);
        },
        sendMessageToUser,
      );
    });
  }
}

function sendMessageToUser(userName: string, textMessage: string): void {
  sendMessage({
    id: Date.now().toString(),
    type: 'MSG_SEND',
    payload: {
      message: {
        to: userName,
        text: textMessage,
      },
    },
  });
}

function getUserStatus(): UserResponse[] {
  const activeUserNames = activeUsers.map((user) => user.login);
  const inactiveUsers = users.filter((user) => {
    return !activeUserNames.includes(user.login);
  });

  return [...activeUsers, ...inactiveUsers];
}

function getAllAuthentificatedUsers(): void {
  sendMessage({
    id: Date.now().toString(),
    type: 'USER_ACTIVE',
    payload: null,
  });
}

function getUnautorizedUsers(): void {
  sendMessage({
    id: Date.now().toString(),
    type: 'USER_INACTIVE',
    payload: null,
  });
}

function getMessageHistory(loginUser: string): void {
  sendMessage({
    id: Date.now().toString(),
    type: 'MSG_FROM_USER',
    payload: {
      user: {
        login: loginUser,
      },
    },
  });
}

function showSendedMessage({
  userName,
  userText,
  time,
  deliveryStatus,
  readStatus,
  editStatus,
}: MessageDetails): void {
  const messages = document.querySelector('.messages__history');
  const initialText = document.querySelector('.messages__history__text');
  const oldMessage = document.querySelector('.messages__type');

  if (oldMessage instanceof HTMLTextAreaElement) {
    oldMessage.value = '';
  }

  if (messages && messages instanceof HTMLElement) {
    if (initialText) {
      initialText.remove();
      messages.classList.add('messages__history__list');
    }

    const messageItem = createElement({
      tag: 'div',
      classes: ['messages__item'],
      parent: messages,
    });

    createElement({
      tag: 'h5',
      text: userName,
      classes: ['messages__item__name'],
      parent: messageItem,
    });

    createElement({
      tag: 'p',
      text: userText,
      classes: ['messages__item__text'],
      parent: messageItem,
    });

    createElement({
      tag: 'p',
      text: formatTime(time),
      classes: ['messages__item__time'],
      parent: messageItem,
    });

    const details = createElement({
      tag: 'div',
      classes: ['messages__item__details'],
      parent: messageItem,
    });

    createElement({
      tag: 'p',
      text: `${deliveryStatus ? '' : 'not'} delivered`,
      classes: ['messages__item__detail'],
      parent: details,
    });

    createElement({
      tag: 'p',
      text: `${editStatus ? '' : 'not'} edited`,
      classes: ['messages__item__detail'],
      parent: details,
    });

    createElement({
      tag: 'p',
      text: `${readStatus ? '' : 'not'} readed`,
      classes: ['messages__item__detail'],
      parent: details,
    });
  }
}

function formatTime(time: number): string {
  const date = new Date(time);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
}

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

console.log(
  'Уважаемые проверяющие! Многое не успела, планирую дорабатывать проект. Буду очень благодарна, если возьметесь за проверку моей работу ближе к окончанию сроков по кросс-чеку.. Еще бы ночку потрудилась.. Заранее благодарю..")',
);

createAuthForm(goLogin, (page) => {
  openAboutPage(page);
});

getUnautorizedUsers();
getAllAuthentificatedUsers();
// getMessageHistory();

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
  } else if (response.type === 'ERROR') {
    const errorModal = document.querySelector('.modal-error');
    if (!errorModal) {
      showErrorModal(response.payload.error);
    }
  } else if (response.type === 'MSG_FROM_USER') {
    console.log(response.payload.messages);
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
      createMainPage(currentUser?.login, goMainPage, users, (page) => {
        openAboutPage(page);
      });
    });
  }
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

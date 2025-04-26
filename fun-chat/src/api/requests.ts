import type { User } from '../vue/pages/main';
import { sendMessage } from './api';
import { createElement } from '../vue/components/create-element';
import { setCurrentUser, getCurrentUser } from '../state/state';

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

function validateAuthForm(data: { login: string; password: string }): string[] {
  const errors: string[] = [];

  if (!data.login.trim()) {
    errors.push('Login is required');
  } else if (data.login.trim().length < 3) {
    errors.push('Login must contain at least 3 characters');
  }

  if (!data.password) {
    errors.push('Password is required');
  } else if (data.password.length < 6) {
    errors.push('Password must contain at least 6 characters');
  } else if (data.password.trim().length === 0) {
    errors.push('The password cannot consist only of spaces');
  }

  return errors;
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

function goLogout(): void {
  const user = getCurrentUser();
  if (!user) {
    return;
  }

  sendMessage({
    id: Date.now().toString(),
    type: 'USER_LOGOUT',
    payload: {
      user: { login: user.login, password: user.password },
    },
  });
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

  setCurrentUser(userData);

  sendMessage({
    id: Date.now().toString(),
    type: 'USER_LOGIN',
    payload: {
      user: { login: userData.login, password: userData.password },
    },
  });
}

export {
  sendMessageToUser,
  getAllAuthentificatedUsers,
  getUnautorizedUsers,
  getMessageHistory,
  goLogout,
  goLogin,
};

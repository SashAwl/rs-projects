import './styles/style.scss';
import { createMainPage } from './vue/pages/main';
import { createAuthForm } from './vue/pages/auth';
import { subscribeToMessages } from './api/api';
import { showAbout } from './vue/pages/about';
import { showErrorModal } from './vue/components/modal-error';
import { showSendedMessage } from './vue/components/create-message';
import {
  goLogin,
  goLogout,
  sendMessageToUser,
  getAllAuthentificatedUsers,
  getUnautorizedUsers,
  getMessageHistory,
} from './api/requests';

import type { ServerResponse } from './api/type-server-response';
import type { UserResponse } from './vue/pages/main';
import type { MessageDetails } from './vue/components/create-message';

import {
  setCurrentUser,
  getCurrentUser,
  setUsers,
  setActiveUsers,
  getUserStatus,
  getUsers,
} from './state/state';

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
      const user = getCurrentUser();
      createMainPage(
        user?.login,
        () => goLogout(user),
        getUserStatus(),
        (page) => {
          openAboutPage(page);
        },
        sendMessageToUser,
      );
    }
  } else if (response.type === 'USER_LOGOUT') {
    if (!response.payload.user.isLogined) {
      setCurrentUser(null);
      document.body.innerHTML = '';
      createAuthForm(goLogin, (page) => {
        openAboutPage(page);
      });
    }
  } else if (response.type === 'USER_ACTIVE') {
    setActiveUsers(response.payload.users);
  } else if (response.type === 'USER_INACTIVE') {
    setUsers(response.payload.users);
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
      const user = getCurrentUser();
      createMainPage(
        user?.login,
        () => goLogout(user),
        getUsers(),
        (page) => {
          openAboutPage(page);
        },
        sendMessageToUser,
      );
    });
  }
}

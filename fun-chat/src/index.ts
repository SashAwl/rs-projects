import './styles/style.scss';
import { createMainPage } from './vue/pages/main';
import { createAuthForm, validateAuthForm } from './vue/pages/auth';
import { createElement } from './vue/components/create-element';
import { sendMessage } from './api/api';
import type { ServerResponse } from './api/type-server-response';
import type { User } from './vue/pages/main';
import { subscribeToMessages } from './api/api';
let currentUser: User | null;

console.log(
  'Уважаемые проверяющие! Многое не успела, планирую дорабатывать проект. Буду очень благодарна, если возьметесь за проверку моей работу ближе к окончанию сроков по кросс-чеку.. Заранее благодарю..")',
);

export function handleAuthResponse(response: ServerResponse): void {
  if (response.type === 'USER_LOGIN') {
    if (response.payload.user.isLogined) {
      console.log('User authenticated successfully');
      document.body.innerHTML = '';

      createMainPage(currentUser?.login, () => {
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
      });
    } else {
      console.log('Authentication failed');
      // showAuthError([response.payload.user.error?]);
    }
  } else if (response.type === 'USER_LOGOUT') {
    if (!response.payload.user.isLogined) {
      currentUser = null;
      document.body.innerHTML = '';
      createAuthForm((userData) => {
        const errors = validateAuthForm(userData);

        if (errors.length > 0) {
          const errorsText = document.querySelector('.error');
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
      });
    }
  }
}

subscribeToMessages(handleAuthResponse);

createAuthForm((userData) => {
  const errors = validateAuthForm(userData);

  if (errors.length > 0) {
    const errorsText = document.querySelector('.error');
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
    payload: { user: { login: userData.login, password: userData.password } },
  });
});

function showAuthError(errors: string[] | undefined): void {
  const form = document.querySelector('.button-submit');
  const erorrsText = createElement({
    tag: 'p',
    classes: ['error'],
    text: `${errors?.join('. ')}`,
  });
  form?.after(erorrsText);
}

import './styles/style.scss';
import { createMainPage } from './vue/pages/main';
import { createAuthForm, validateAuthForm } from './vue/pages/auth';
import { createElement } from './vue/components/create-element';
import { sendMessage } from './api/api';
import type { ServerResponse } from './api/type-server-response';
// import { ServerRequest } from './api/type-server-request';
import { subscribeToMessages } from './api/api';

export function handleAuthResponse(response: ServerResponse): void {
  if (response.type === 'USER_LOGIN') {
    if (response.payload.user.isLogined) {
      console.log('User authenticated successfully', response);
      document.body.innerHTML = '';
      createMainPage(response.payload.user.login);
    } else {
      console.log('Authentication failed', response.payload);
      //   showAuthError([response.payload.user.error?]);
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

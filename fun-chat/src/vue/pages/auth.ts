import { createInputElement } from '../components/create-input-element';
import { createElement } from '../components/create-element';

export function createAuthForm(
  onSubmit: (data: { login: string; password: string }) => void,
  goAboutPage: (page: string) => void,
): HTMLElement {
  const auth = createElement({
    tag: 'div',
    classes: ['auth'],
    parent: document.body,
  });

  createElement({
    tag: 'div',
    classes: ['auth__background'],
    parent: auth,
  });

  const authForm = createElement({
    tag: 'form',
    classes: ['auth__form'],
    parent: auth,
  });

  createElement({
    tag: 'label',
    text: 'Login',
    for: 'login',
    classes: ['auth__label', 'auth__form-item'],
    parent: authForm,
  });

  const authLogin = createInputElement({
    type: 'text',
    name: 'login',
    placeholder: 'Input your login',
    classes: ['auth__form-item'],
    parent: authForm,
  });

  createElement({
    tag: 'label',
    text: 'Password',
    for: 'password',
    classes: ['auth__label', 'auth__form-item'],
    parent: authForm,
  });

  const authPassword = createInputElement({
    type: 'password',
    name: 'password',
    placeholder: 'Input your password',
    classes: ['auth__form-item'],
    parent: authForm,
  });

  createElement({
    tag: 'button',
    text: 'Submit',
    classes: ['button', 'button-submit'],
    parent: authForm,
  });

  const aboutButton = createElement({
    tag: 'button',
    text: 'About',
    classes: ['button', 'button-about'],
    parent: authForm,
  });

  aboutButton.addEventListener('click', () => {
    goAboutPage('auth-form');
  });

  if (authForm) {
    authForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const dataUser = {
        login: authLogin.value,
        password: authPassword.value,
      };
      onSubmit(dataUser);
    });
  } else {
    console.error('authForm is null');
  }

  authForm.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        const dataUser = {
          login: authLogin.value,
          password: authPassword.value,
        };
        onSubmit(dataUser);
      }
    },
    { once: true },
  );

  return auth;
}

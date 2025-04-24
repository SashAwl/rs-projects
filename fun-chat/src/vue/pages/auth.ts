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
      const login = authLogin.value;
      const password = authPassword.value;
      onSubmit({ login, password });
    });
  } else {
    console.error('authForm is null');
  }

  authForm.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        const login = authLogin?.value;
        const password = authPassword?.value;
        onSubmit({ login, password });
      }
    },
    { once: true },
  );

  // document.addEventListener('DOMContentLoaded', () => {
  //   const body = document.body;
  //   if (!body) {
  //     console.error('document.body is null');
  //     return;
  //   }
  //   body.addEventListener(
  //     'keydown',
  //     (event) => {
  //       if (event.code === 'Enter') {
  //         const login = authLogin?.value;
  //         const password = authPassword?.value;
  //         onSubmit({ login, password });
  //       }
  //     },
  //     { once: true },
  //   );
  // });

  return auth;
}

export function validateAuthForm(data: {
  login: string;
  password: string;
}): string[] {
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

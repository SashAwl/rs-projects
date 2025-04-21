import { createInputElement } from '../components/create-input-element';
import { createElement } from '../components/create-element';

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
  tag: 'div',
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

createInputElement({
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

createInputElement({
  type: 'password',
  name: 'password',
  placeholder: 'Input your password',
  classes: ['auth__form-item'],
  parent: authForm,
});

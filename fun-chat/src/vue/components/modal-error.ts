import { createElement } from './create-element';

export function showErrorModal(error: string): HTMLElement {
  const modal = createElement({
    tag: 'div',
    classes: ['error'],
    parent: document.body,
  });

  createElement({
    tag: 'h3',
    text: 'Error!',
    classes: ['error__heading'],
    parent: modal,
  });

  createElement({
    tag: 'p',
    text: `Error: ${error}`,
    classes: ['error__text'],
    parent: modal,
  });

  const closeButton = createElement({
    tag: 'button',
    classes: ['button', 'button-close-error'],
    text: 'OK',
    parent: modal,
  });
  closeButton.focus();

  closeButton.addEventListener('click', () => {
    modal.remove();
  });

  closeButton.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        modal.remove();
      }
    },
    { once: true },
  );

  return modal;
}

import { createElement } from '../components/create-element';
import { createAnchorElement } from '../components/create-anchor-element';

export function showAbout(goToBack: () => void): HTMLElement {
  const about = createElement({
    tag: 'div',
    classes: ['about'],
    parent: document.body,
  });

  createElement({
    tag: 'h1',
    text: 'Fun chat',
    classes: ['heading'],
    parent: about,
  });

  createElement({
    tag: 'p',
    text: 'The app is designed to demonstrate the Fun Chat assignment as part of the RSSchool JS/FE 2024 course.',
    classes: ['heading'],
    parent: about,
  });

  createAnchorElement({
    text: 'Author SashAwl',
    href: 'https://github.com/SashAwl',
    classes: ['about__link'],
    parent: about,
  });

  const backButton = createElement({
    tag: 'button',
    text: 'Back',
    classes: ['button', 'button-back'],
    parent: about,
  });

  backButton.addEventListener('click', () => {
    goToBack();
  });

  return about;
}

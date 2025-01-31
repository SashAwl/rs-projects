import {
  createElement,
  createHint,
  createImageField,
} from './createElementFunctions.js';
import { nonogram } from './dataImg.js';

const container = createElement({
  tag: 'div',
  text: '',
  parent: document.body,
  classes: ['container'],
});

const scheme = createElement({
  tag: 'div',
  text: '',
  parent: container,
  classes: ['scheme'],
});

const schemeHeading = createElement({
  tag: 'h1',
  text: 'Umbrella scheme',
  parent: scheme,
  classes: ['scheme__heading'],
});

const schemeImg = createElement({
  tag: 'div',
  text: '',
  parent: scheme,
  classes: ['scheme__img'],
});

const schemeHinttop = createElement({
  tag: 'div',
  text: '',
  parent: schemeImg,
  classes: ['scheme__hinttop'],
});

const schemeImgWrapper = createElement({
  tag: 'div',
  text: '',
  parent: schemeImg,
  classes: ['scheme__wrapper'],
});

const schemeHintleft = createElement({
  tag: 'div',
  text: '',
  parent: schemeImgWrapper,
  classes: ['scheme__hintleft'],
});

export const schemeField = createElement({
  tag: 'div',
  text: '',
  parent: schemeImgWrapper,
  classes: ['scheme__field'],
});

createHint(nonogram.hintTop, schemeHinttop);
createHint(nonogram.hintLeft, schemeHintleft);
createImageField(nonogram.img, schemeField);

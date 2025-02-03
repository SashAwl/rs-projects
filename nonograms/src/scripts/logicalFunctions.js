import { createElement } from './createElementFunctions';

export function checkSolution(userAnswerMatrix, solutionMatrix) {
  const answerStr = userAnswerMatrix.reduce(
    (accom, row) => accom + row.join(''),
    ''
  );

  const solutionStr = solutionMatrix.reduce(
    (accom, row) => accom + row.join(''),
    ''
  );
  return answerStr === solutionStr;
}

export function congratulate(parentElem) {
  const backHooray = createElement({
    tag: 'div',
    text: '',
    parent: parentElem,
    classes: ['back-hooray'],
  });

  const hooray = createElement({
    tag: 'div',
    text: '',
    parent: parentElem,
    classes: ['hooray'],
  });

  const hoorayHead = createElement({
    tag: 'h1',
    text: 'Great!',
    parent: hooray,
    classes: ['hooray__heading'],
  });

  const hoorayText = createElement({
    tag: 'h3',
    text: 'You have solved the nonogram!',
    parent: hooray,
    classes: ['hooray__text'],
  });

  const playAgainButton = createElement({
    tag: 'button',
    text: 'Play again',
    parent: hooray,
    classes: ['button', 'hooray__again'],
  });
}

export function oops(parentElem) {
  const oops = createElement({
    tag: 'p',
    text: 'Oops! You made a mistake. Try again!',
    parent: parentElem,
    classes: ['oops'],
  });

  setTimeout(() => {
    oops.classList.add('hide-message');

    setTimeout(() => oops.remove(), 1000);
  }, 2000);
}

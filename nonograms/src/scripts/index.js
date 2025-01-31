import '../style.scss';
import createElement from './createElementFunction.js';

const nonogram = {
  img: [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ],
  hintTop: [[1], [2, 1], [5], [2, 1], [1]],
  hintLeft: [[1], [3], [5], [1], [3]],
};

const userSolution = Array.from({ length: 5 }).map((item) =>
  Array.from({ length: 5 }).fill(0)
);

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

createHint(nonogram.hintTop, schemeHinttop);
createHint(nonogram.hintLeft, schemeHintleft);

function createHint(matrix, parent) {
  const sparseMatrix = getSparseMatrix(matrix);

  sparseMatrix.forEach((row) => {
    row.forEach((elem) => {
      createElement({
        tag: 'div',
        text: elem ? elem : '',
        parent: parent,
        classes: ['pixel'],
      });
    });
  });
}

function getSparseMatrix(matrix) {
  const len = getMaxLength(matrix);

  return matrix.map((row) => {
    while (row.length < len) {
      row.unshift(0);
    }
    return row;
  });
}

function getMaxLength(matrix) {
  return matrix.reduce((accom, row) => Math.max(accom, row.length), 0);
}

const schemeField = createElement({
  tag: 'div',
  text: '',
  parent: schemeImgWrapper,
  classes: ['scheme__field'],
});

createImageField(nonogram.img);

function createImageField(matrix) {
  matrix.forEach((row, indexRow) => {
    row.forEach((elem, indexElem) => {
      const pixel = createElement({
        tag: 'div',
        text: '',
        parent: schemeField,
        classes: ['pixel'],
      });

      pixel.append(setCross());

      pixel.addEventListener('click', (event) => {
        switchColorPixel(event);
        userSolution[indexRow][indexElem] = +!userSolution[indexRow][indexElem];
      });

      pixel.addEventListener('contextmenu', (event) => {
        if (event.target.closest('.pixel')) {
          const cross = findCross(event);
          cross.classList.toggle('cross--hidden');
        }

        event.preventDefault();
      });
    });
  });
}

function switchColorPixel(event) {
  const target = event.target.closest('.pixel');
  if (target) {
    target.classList.toggle('pixel--black');

    const cross = findCross(event);
    cross.classList.add('cross--hidden');
  }
}

function findCross(event) {
  return event.target.querySelector('.cross') || event.target.closest('.cross');
}

function setCross() {
  const cross = createElement({
    tag: 'div',
    text: '',
    parent: null,
    classes: ['cross', 'cross--hidden'],
  });

  const line1 = createElement({
    tag: 'div',
    text: '',
    parent: cross,
    classes: ['cross__line', 'line1'],
  });

  const line2 = createElement({
    tag: 'div',
    text: '',
    parent: cross,
    classes: ['cross__line', 'line2'],
  });

  return cross;
}

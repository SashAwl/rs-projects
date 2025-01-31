export function createElement(options) {
  const { tag = 'div', text = '', parent, classes = [] } = options;

  const element = document.createElement(tag);
  element.textContent = text;

  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  if (parent != null) {
    parent.appendChild(element);
  }

  return element;
}

export function createHint(matrix, parent) {
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

export function createImageField(matrix, parentElem) {
  matrix.forEach((row, indexRow) => {
    row.forEach((elem, indexElem) => {
      const pixel = createElement({
        tag: 'div',
        text: '',
        parent: parentElem,
        classes: ['pixel'],
      });

      pixel.dataset.locate = '' + indexRow + indexElem;
      pixel.append(setCross());
    });
  });
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

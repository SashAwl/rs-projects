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

export function setScheme(data, locate) {
  const oldScheme = document.querySelector('.scheme');
  if (oldScheme) {
    oldScheme.remove();
  }

  const currentScheme = createScheme(data);
  locate.after(currentScheme);
}

function createScheme({ name, scheme: schemeDetail }) {
  const scheme = createElement('div');
  scheme.classList.add('scheme');

  const schemeHeading = createElement({
    tag: 'h1',
    text: name,
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

  const schemeField = createElement({
    tag: 'div',
    text: '',
    parent: schemeImgWrapper,
    classes: ['scheme__field'],
  });

  createHint(schemeDetail.hintTop, schemeHinttop);
  createHint(schemeDetail.hintLeft, schemeHintleft);
  createImageField(schemeDetail.img, schemeField);

  return scheme;
}

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
  const len = 3; //getMaxLength(matrix);

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

function createImageField(matrix, parentElem) {
  matrix.forEach((row, indexRow) => {
    row.forEach((elem, indexElem) => {
      const pixel = createElement({
        tag: 'div',
        text: '',
        parent: parentElem,
        classes: ['pixel', 'pixel-img'],
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

export function createControlls(parentContrlls) {
  const controlls = createElement({
    tag: 'div',
    text: '',
    parent: parentContrlls,
    classes: ['scheme__controlls'],
  });

  const controllsCheck = createElement({
    tag: 'button',
    text: 'Check',
    parent: controlls,
    classes: ['button', 'button__check'],
  });

  const controllsReset = createElement({
    tag: 'button',
    text: 'Reset',
    parent: controlls,
    classes: ['button', 'button__reset'],
  });

  const controllsSave = createElement({
    tag: 'button',
    text: 'Save game',
    parent: controlls,
    classes: ['button', 'button__save'],
  });

  const controllRestore = createElement({
    tag: 'button',
    text: 'Restore game',
    parent: controlls,
    classes: ['button', 'button__restore'],
  });

  const controllShowSolution = createElement({
    tag: 'button',
    text: 'Show solution',
    parent: controlls,
    classes: ['button', 'button__show-solution'],
  });

  return controlls;
}

export function createBurger(parentBurger) {
  const box = createElement({
    tag: 'div',
    text: '',
    parent: parentBurger,
    classes: ['burger'],
  });

  for (let i = 0; i < 3; i += 1) {
    const line = createElement({
      tag: 'div',
      text: '',
      parent: box,
      classes: ['burger__line'],
    });
  }

  return box;
}

export function createTable(parentTable, dataList) {
  const backTable = createElement({
    tag: 'div',
    text: '',
    parent: parentTable,
    classes: ['back-hooray'],
  });

  const box = createElement({
    tag: 'div',
    text: '',
    parent: parentTable,
    classes: ['table'],
  });

  const heading = createElement({
    tag: 'h2',
    text: 'Result table',
    parent: box,
    classes: ['table__box'],
  });

  const tableList = createElement({
    tag: 'ul',
    text: '',
    parent: box,
    classes: ['table__list'],
  });

  const listItem = createElement({
    tag: 'li',
    text: '',
    parent: tableList,
    classes: ['table__item'],
  });

  const tableRow = createElement({
    tag: 'ul',
    text: '',
    parent: listItem,
    classes: ['table__row'],
  });

  const rowName = createElement({
    tag: 'li',
    text: 'Name',
    parent: tableRow,
    classes: ['row-item'],
  });
  const rowLevel = createElement({
    tag: 'li',
    text: 'Level',
    parent: tableRow,
    classes: ['row-item'],
  });
  const rowTime = createElement({
    tag: 'li',
    text: 'Time',
    parent: tableRow,
    classes: ['row-item'],
  });

  dataList.forEach((item) => {
    const listItem = createElement({
      tag: 'li',
      text: '',
      parent: tableList,
      classes: ['table__item'],
    });

    const tableRow = createElement({
      tag: 'ul',
      text: '',
      parent: listItem,
      classes: ['table__row'],
    });

    for (let i in item) {
      const rowItem = createElement({
        tag: 'li',
        text: item[i],
        parent: tableRow,
        classes: ['row-item'],
      });
    }
    return box;
  });
}

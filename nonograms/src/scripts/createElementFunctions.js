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

  createHint(
    schemeDetail.hintTop,
    schemeHinttop,
    '--hint-top-high',
    '--width-pixel'
  );
  createHint(
    schemeDetail.hintLeft,
    schemeHintleft,
    '--hint-left-width',
    '--width-pixel'
  );
  createImageField(
    schemeDetail.img,
    schemeField,
    '--field-width',
    '--width-pixel'
  );

  return scheme;
}

function createHint(matrix, parent, variableCount, variableScale) {
  const sparseMatrix = getSparseMatrix(matrix);

  sparseMatrix.forEach((row, indexRow) => {
    row.forEach((elem, indexElem) => {
      createElement({
        tag: 'div',
        text: elem ? elem : '',
        parent: parent,
        classes: ['pixel'],
      });
    });
  });

  const len = sparseMatrix[0].length;
  changeCountPixel(variableCount, len);

  if (len === 10) {
    changeCountPixel(variableScale, '30px');
  }
  if (len === 15) {
    changeCountPixel(variableScale, '20px');
  }
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

function changeCountPixel(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

function createImageField(matrix, parentElem, variableCount, variableScale) {
  matrix.forEach((row, indexRow) => {
    row.forEach((elem, indexElem) => {
      const pixel = createElement({
        tag: 'div',
        text: '',
        parent: parentElem,
        classes: ['pixel', 'pixel-img'],
      });

      pixel.dataset.locate = '' + indexRow + ':' + indexElem;
      pixel.append(setCross());

      if ((indexRow + 1) % 5 === 0) {
        pixel.classList.add('pixel-line-bottom');
      }

      if ((indexElem + 1) % 5 === 0) {
        pixel.classList.add('pixel-line-right');
      }

      const len = matrix[0].length;
      changeCountPixel(variableCount, len);

      if (len === 10) {
        changeCountPixel(variableScale, '30px');
      }
      if (len === 15) {
        changeCountPixel(variableScale, '20px');
      }
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
    classes: ['button', 'button--block', 'button__check'],
  });

  const controllsReset = createElement({
    tag: 'button',
    text: 'Reset',
    parent: controlls,
    classes: ['button', 'button--block', 'button__reset'],
  });

  const controllsSave = createElement({
    tag: 'button',
    text: 'Save game',
    parent: controlls,
    classes: ['button', 'button--block', 'button__save'],
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
    classes: ['button', 'button--block', 'button__show-solution'],
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

export function createMenu(list, currentLevel, parenNav) {
  const menu = createElement({
    tag: 'details',
    text: '',
    parent: parenNav,
    classes: ['nav__box'],
  });
  menu.setAttribute('open', true);

  const summary = createElement({
    tag: 'summary',
    text: `Level ${currentLevel}`,
    parent: menu,
    classes: ['nav__summary'],
  });

  const easySchemeList = createElement({
    tag: 'ul',
    text: '',
    parent: menu,
    classes: ['nav__list'],
  });

  list.forEach((item) => {
    const easyItem = createElement({
      tag: 'li',
      text: '',
      parent: easySchemeList,
      classes: ['nav__item'],
    });

    const easyItemLink = createElement({
      tag: 'a',
      text: item.name,
      parent: easyItem,
      classes: ['nav__link'],
    });
    easyItemLink.setAttribute('href', '#');
  });
}

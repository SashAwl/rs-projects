let isPlayingMode = false;
let round = 1;

function createElement(options) {
  const { tag = "div", text = "", parent, classes = [] } = options;

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

const container = createElement({
  tag: "div",
  text: "",
  parent: document.body,
  classes: ["container"],
});

const startScreen = createElement({
  tag: "div",
  text: "",
  parent: container,
  classes: ["start-screen"],
});

const gameName = createElement({
  tag: "h1",
  text: "Saymon says",
  parent: startScreen,
  classes: ["game__name"],
});

const levelSwitch = createElement({
  tag: "select",
  text: "Level",
  parent: null,
  classes: ["level-switch"],
});

const levelList = ["Easy", "Medium", "Hard"];
levelList.forEach((level) => {
  const levelItem = createElement({
    tag: "option",
    text: `${level}`,
    parent: levelSwitch,
    classes: ["level-switch__item"],
  });
});

levelSwitch.addEventListener("change", () => {
  currentLevel = levelSwitch.value;
  currentAlphabet = getAlphabet(currentLevel);
  keyboard.innerHTML = "";
  createKeyBoard(currentAlphabet);
});
startScreen.appendChild(levelSwitch);

const startButton = createElement({
  tag: "button",
  text: "Start",
  parent: startScreen,
  classes: ["button", "button-start"],
});

startButton.addEventListener("click", () => {
  isPlayingMode = true;
  turnGameMode();
  startNewGame();
});

function turnGameMode() {
  levelSwitch.disabled = true;
  levelSwitch.classList.add("level-switch--disabled");

  buttonBox.classList.remove("button-box--none");
  gameText.classList.remove("elem-hidden");
  answerField.classList.remove("elem-hidden");

  startButton.classList.add("button--none");
  backgroundStart.classList.add("back--none");
}

const buttonBox = createElement({
  tag: "div",
  text: "",
  parent: startScreen,
  classes: ["button-box", "button-box--none"],
});

const newGameButton = createElement({
  tag: "button",
  text: "New game",
  parent: buttonBox,
  classes: ["button"],
});

const repeatSequenceButton = createElement({
  tag: "button",
  text: "Repeat the sequence",
  parent: buttonBox,
  classes: ["button"],
});

const currentGameInfo = createElement({
  tag: "div",
  text: "",
  parent: startScreen,
  classes: ["game__info"],
});

const gameText = createElement({
  tag: "p",
  text: `Round: ${round}`,
  parent: currentGameInfo,
  classes: ["game__text", "elem-hidden"],
});

const answerField = createElement({
  tag: "p",
  text: "",
  parent: currentGameInfo,
  classes: ["game__answer-field", "elem-hidden"],
});

const backgroundStart = createElement({
  tag: "div",
  text: "",
  parent: startScreen,
  classes: ["start-screen__back"],
});

const keyboard = createElement({
  tag: "div",
  text: "",
  parent: startScreen,
  classes: ["keyboard"],
});

const keys = "0123456789QWERTYUIOPASDFGHJKLZXCVBNM".split("");
let currentLevel = "Easy";
let currentAlphabet = getAlphabet(currentLevel);

createKeyBoard(currentAlphabet);

function createKeyBoard(keyList) {
  keyList.forEach((key) => {
    const keyItem = createElement({
      tag: "button",
      text: `${key}`,
      parent: keyboard,
      classes: ["button-key"],
    });
    keyItem.setAttribute("data-key", `key${key}`);
  });
}

function getAlphabet(level) {
  if (level === "Easy") {
    return keys.slice(0, 10);
  }
  if (level === "Medium") {
    return keys.slice(10);
  }
  return [...keys];
}

function startNewGame() {
  const sequenceLen = getSequenceLen(round);
  const randomSequence = generateRandomSequence(currentAlphabet, sequenceLen);
  const currentSequenceElenments = getSquenceDOMElement(randomSequence);
  console.log("Current sequence ", randomSequence);

  setTimeout(() => {
    displaySequence(currentSequenceElenments);
  }, 1000);
}

function generateRandomSequence(symbolList, len) {
  let sequence = [];

  for (let i = 0; i < len; i++) {
    const keyNum = Math.floor(Math.random() * symbolList.length);
    sequence.push(symbolList[keyNum]);
  }
  return sequence;
}

function getSequenceLen(round) {
  return round * 2;
}

function getSquenceDOMElement(elemValueList) {
  return elemValueList.map((elem) => {
    return document.querySelector(`.button-key[data-key='key${elem}']`);
  });
}

function displaySequence(keyList) {
  keyList.forEach((key, index) => {
    setTimeout(() => {
      highlightKey(key);
    }, 700 * index);
  });
}

function highlightKey(key) {
  key.classList.add("button-key--highlight");
  setTimeout(() => {
    key.classList.remove("button-key--highlight");
  }, 400);
}

// const keyButton = document.querySelector(".button-key[data-key='key6']");
// highlightKey(keyButton);
// console.log(keyButton);
// keyButton.classList.add("button-key--highlight");

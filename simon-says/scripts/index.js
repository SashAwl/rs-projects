let round = 1;
let isRepeatedSequence = false;
let currentHandlerInput = null;
let currentHandlerRepeatButton = null;
let isDisplayingSequence = false;

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
  turnGameMode();
  provideAccessInput(answerField);
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

newGameButton.addEventListener("click", () => {
  restartGame();
  round = 1;
  updateRound();
  levelSwitch.value = currentLevel;
  closeAccessInput(answerField);

  isRepeatedSequence = false;
  activeRepeatButton();
});

function restartGame() {
  levelSwitch.removeAttribute("disabled");
  levelSwitch.classList.remove("level-switch--disabled");

  buttonBox.classList.add("button-box--none");
  gameText.classList.add("elem-hidden");
  answerField.classList.add("elem-hidden");

  startButton.classList.remove("button--none");
  backgroundStart.classList.remove("back--none");
}

const nextRoundButton = createElement({
  tag: "button",
  text: "Next",
  parent: buttonBox,
  classes: ["button", "elem-hidden"],
});

nextRoundButton.addEventListener("click", () => {
  if (round < 5) {
    round += 1;
    nextRound();
  } else if (round === 5 && currentLevel !== "Hard") {
    nextLevel();
    nextRound();
  }
});

function nextRound() {
  updateRound();
  switchNextRoundButton();
  activeRepeatButton();
  provideAccessInput(answerField);
  startNewGame();
}

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

const answerField = createElementInput({
  optionBase: {
    tag: "input",
    text: "",
    parent: currentGameInfo,
    classes: ["game__answer-field", "elem-hidden"],
  },
  type: "text",
  placeholder: "Use english keyboard layout",
});

answerField.addEventListener("keydown", (event) => {
  blockKeys(currentLevel, event);
  hightlightPressedKey(event);
});

function createElementInput(option) {
  const { optionBase, type, placeholder } = option;

  const inputElem = createElement(optionBase);
  inputElem.setAttribute("type", type);
  inputElem.setAttribute("placeholder", placeholder);
  inputElem.disabled = true;

  return inputElem;
}

function blockKeys(level, event) {
  const isDigit = event.code.startsWith("Digit");
  const isKey = event.code.startsWith("Key");

  if (level === "Easy" && !isDigit) {
    event.preventDefault();
  }

  if (level === "Medium" && !isKey) {
    event.preventDefault();
  }

  if (level === "Hard" && !(isDigit || isKey)) {
    event.preventDefault();
  }
}

function hightlightPressedKey(event) {
  const key = event.key.toUpperCase();
  const keyElem = document.querySelector(`.button-key[data-key='key${key}']`);
  highlightKey(keyElem, 200);
}

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

    keyItem.addEventListener("click", (event) => {
      const pressedKey = event.target.textContent;
      answerField.value += pressedKey;
      const simulationEvent = new Event("input", {
        bubbles: true,
        cancelable: true,
      });
      inputElement.dispatchEvent(simulationEvent);
    });
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

  displaySequence(currentSequenceElenments);
  getEvaluteAnswer(randomSequence);
  repeatSequence(currentSequenceElenments);
}

function repeatSequence(currentSequenceElenments) {
  if (currentHandlerRepeatButton) {
    repeatSequenceButton.removeEventListener(
      "click",
      currentHandlerRepeatButton
    );
  }

  currentHandlerRepeatButton = () => {
    isRepeatedSequence = true;
    repeatSequenceButton.classList.remove("button--hightlight");
    provideAccessInput(answerField);
    disableRepeatButton();
    displaySequence(currentSequenceElenments);
  };

  repeatSequenceButton.addEventListener("click", currentHandlerRepeatButton);
}

function getEvaluteAnswer(randomSequence) {
  if (currentHandlerInput) {
    answerField.removeEventListener("input", currentHandlerInput);
  }
  currentHandlerInput = () => evaluteAnswer(randomSequence);
  answerField.addEventListener("input", currentHandlerInput);
}

function checkAnswer(sequence) {
  const currentAnswer = answerField.value.toUpperCase();
  const rightAnswer = sequence.join("");
  const sequenceLen = rightAnswer.length;

  if (
    currentAnswer.length < sequenceLen &&
    currentAnswer !== rightAnswer.slice(0, currentAnswer.length)
  ) {
    return false;
  }

  if (currentAnswer.length === sequenceLen && currentAnswer !== rightAnswer) {
    return false;
  }
  return true;
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
  closeAccessInput(answerField);
  isDisplayingSequence = true;
  document.addEventListener("keydown", blockKeyBoard);

  setTimeout(() => {
    keyList.forEach((key, index) => {
      setTimeout(() => {
        highlightKey(key, 400);
      }, 700 * index);
    });

    setTimeout(() => {
      provideAccessInput(answerField);
      isDisplayingSequence = false;
      document.removeEventListener("keydown", blockKeyBoard);
    }, 700 * keyList.length);
  }, 1000);
}

function evaluteAnswer(sequence) {
  if (!checkAnswer(sequence)) {
    answerField.classList.add("game__answer-field--incorrect");
    answerField.disabled = true;

    if (!isRepeatedSequence) {
      highlightRepeatButton();
    }
  }

  if (isRepeatedSequence) {
    disableRepeatButton();
  }

  const answer = answerField.value.toUpperCase();
  if (answer === sequence.join("")) {
    answerField.classList.add("game__answer-field--correct");
    answerField.disabled = true;

    disableRepeatButton();

    if (round <= 5 && !(round === 5 && currentLevel === "Hard")) {
      switchNextRoundButton();
    }

    if (round === 5 && currentLevel === "Hard") {
      congratulate();
    }
  }
}

function highlightKey(key, time) {
  key.classList.add("button-key--highlight");
  setTimeout(() => {
    key.classList.remove("button-key--highlight");
  }, time);
}

function provideAccessInput(elem) {
  elem.removeAttribute("disabled");
  elem.classList.remove("game__answer-field--correct");
  elem.focus();
}

function closeAccessInput(elem) {
  elem.setAttribute("disabled", true);
  elem.value = "";
  elem.classList.remove("game__answer-field--incorrect");
}

function highlightRepeatButton() {
  repeatSequenceButton.classList.add("button--hightlight");
}

function disableRepeatButton() {
  repeatSequenceButton.disable = true;
  repeatSequenceButton.classList.add("button--disabled");
  repeatSequenceButton.classList.remove("button--hightlight");
}

function activeRepeatButton() {
  isRepeatedSequence = false;
  repeatSequenceButton.removeAttribute("disabled");
  repeatSequenceButton.classList.remove("button--disabled");
}

function updateRound() {
  const roundText = document.querySelector(".game__text");
  roundText.textContent = `Round: ${round}`;
}

function switchNextRoundButton() {
  newGameButton.classList.toggle("elem-hidden");
  nextRoundButton.classList.toggle("elem-hidden");
  nextRoundButton.classList.toggle("button--hightlight");
}

function blockKeyBoard(event) {
  if (isDisplayingSequence) {
    event.preventDefault();
  }
}

function nextLevel() {
  if (currentLevel === "Easy") {
    currentLevel = "Medium";
  } else if (currentLevel === "Medium") {
    currentLevel = "Hard";
  }
  round = 1;
  levelSwitch.value = currentLevel;

  currentAlphabet = getAlphabet(currentLevel);
  keyboard.innerHTML = "";
  createKeyBoard(currentAlphabet);
}

function congratulate() {
  // const hoorayBlock = createElement({
  //   tag: "div",
  //   text: "",
  //   parent: startScreen,
  //   classes: ["button-box", "button-box--none"],
  // });
  console.log("поздравляю");
}

// Обработать русскую раскладку
// Обработать виртуальную клавиатуру

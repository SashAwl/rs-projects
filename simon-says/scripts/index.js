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

const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const startScreen = document.createElement("div");
startScreen.classList.add("start-screen");
container.appendChild(startScreen);

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
  keyboard.innerHTML = "";
  createKeyBoard(getAlphabet(currentLevel));
});
startScreen.appendChild(levelSwitch);

const startButton = createElement({
  tag: "button",
  text: "Start",
  parent: startScreen,
  classes: ["button", "button-start"],
});

startButton.addEventListener("click", () => {
  backgroundStart.classList.add("back--none");
  levelSwitch.disabled = true;
  levelSwitch.classList.add("level-switch--disabled");
  buttonBox.classList.remove("button-box--none");
  gameText.classList.remove("elem-hidden");
  startButton.classList.add("button--none");
  answerField.classList.remove("elem-hidden");
});

const buttonBox = createElement({
  tag: "div",
  text: "",
  parent: startScreen,
  classes: ["button-box", "button-box--none"],
});

const newGame = createElement({
  tag: "button",
  text: "New game",
  parent: buttonBox,
  classes: ["button"],
});

const repeatSequence = createElement({
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

const roundCounter = 1;

const gameText = createElement({
  tag: "p",
  text: `Round: ${roundCounter}`,
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

const keyNumberList = "0123456789".split("");
const keyAlphabetList = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
let currentLevel = "Easy";
createKeyBoard(getAlphabet(currentLevel));

function createKeyBoard(keyList) {
  keyList.forEach((key) => {
    const keyItem = createElement({
      tag: "button",
      text: `${key}`,
      parent: keyboard,
      classes: ["button-key"],
    });
  });
}

function getAlphabet(level) {
  let keyDisplayList = [];

  if (level === "Easy") {
    keyDisplayList = [...keyNumberList];
  } else if (level === "Medium") {
    keyDisplayList = [...keyAlphabetList];
  } else {
    keyDisplayList = [...keyNumberList, ...keyAlphabetList];
  }

  return keyDisplayList;
}

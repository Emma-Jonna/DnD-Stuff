const diceResult = document.querySelector(".dice-result");
const diceSelector = document.querySelector(".dice-selector");
const randomDiceButton = document.querySelector(".random-dice-button");
const classResult = document.querySelector(".class-result");
const randomClassButton = document.querySelector(".random-class-button");

const diceList = [2, 3, 4, 6, 8, 10, 12, 20, 100];
const classList = [
  "Artificer",
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rouge",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const randomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber) + 1;
};

const createDiceOpitions = (listOfDice, selectorElement) => {
  listOfDice.forEach((element) => {
    const diceOption = document.createElement("option");

    diceOption.textContent = `d${element}`;
    diceOption.value = element;

    selectorElement.appendChild(diceOption);
  });
};

randomClassButton.addEventListener("click", () => {
  let classIndex = randomNumber(classList.length) - 1;

  while (classIndex == classResult.value) {
    classIndex = randomNumber(classList.length) - 1;
  }

  classResult.textContent = classList[classIndex];
  classResult.value = classIndex;
});

randomDiceButton.addEventListener("click", () => {
  const diceRoll = randomNumber(Number(diceSelector.value));

  diceResult.textContent = diceRoll;
});

createDiceOpitions(diceList, diceSelector);

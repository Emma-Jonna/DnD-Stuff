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

const randomClass = (listOFClasses) => {
  const random = randomNumber(listOFClasses);

  return random - 1;
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
  let classIndex = randomClass(classList.length);

  while (classIndex == classResult.value) {
    classIndex = randomClass(classList.length);
  }

  console.log(classList[classIndex]);
  classResult.textContent = classList[classIndex];
  classResult.value = classIndex;
});

createDiceOpitions(diceList, diceSelector);

diceSelector.addEventListener("change", () => {
  console.log(diceSelector.value);
});

randomDiceButton.addEventListener("click", () => {
  const diceRoll = randomNumber(Number(diceSelector.value));

  diceResult.textContent = diceRoll;
});

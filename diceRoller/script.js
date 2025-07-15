const diceResult = document.querySelector(".dice-result");
const diceSelector = document.querySelector(".dice-selector");
const randomDiceButton = document.querySelector(".random-dice-button");

const diceList = [2, 3, 4, 6, 8, 10, 12, 20, 100];

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

randomDiceButton.addEventListener("click", () => {
  const diceRoll = randomNumber(Number(diceSelector.value));

  diceResult.textContent = diceRoll;
});

createDiceOpitions(diceList, diceSelector);

const diceResult = document.querySelector("p");
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

// diceResult.textContent = randomNumber(4);
createDiceOpitions(diceList, diceSelector);

diceSelector.addEventListener("change", () => {
  console.log(diceSelector.value);
});

randomDiceButton.addEventListener("click", () => {
  let diceRoll = randomNumber(Number(diceSelector.value));

  if (diceRoll == 1) {
    return;
  }

  while (diceRoll == Number(diceResult.textContent)) {
    diceRoll = randomNumber(Number(diceSelector.value));
  }

  // console.log(diceRoll);

  diceResult.textContent = diceRoll;
});

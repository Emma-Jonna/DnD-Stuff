const classResult = document.querySelector(".class-result");
const randomClassButton = document.querySelector(".random-class-button");
const lineageResult = document.querySelector(".lineage-result");
const randomineageButton = document.querySelector(".random-lineage-button");

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
const lineages = [
  "Dragonborn",
  "Half-Orc",
  "Human",
  "Tiefling",
  "Aarakocra",
  "Goliath",
  "Half-Elf",
  "Wood-Elf",
  "High-Elf",
  "Dark-Elf",
  "Hill-Dwarf",
  "Mountain-Dwarf",
  "Stout-Halfling",
  "Lightfoot-Halfling",
  "Water-Genasi",
  "Air-Genasi",
  "Earth-Genasi",
  "Fire-Genasi",
  "Forest-Gnome",
  "Rock-Gnome",
  "Deep-Gnome",
];

const randomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber) + 1;
};

const getOneRandomItemFromList = (itemList, elementContainer) => {
  let index = randomNumber(itemList.length) - 1;

  while (index == elementContainer.value) {
    index = randomNumber(itemList.length) - 1;
  }

  elementContainer.textContent = itemList[index];
  elementContainer.value = index;
};

randomClassButton.addEventListener("click", () => {
  getOneRandomItemFromList(classList, classResult);
});

randomineageButton.addEventListener("click", () => {
  getOneRandomItemFromList(lineages, lineageResult);
});

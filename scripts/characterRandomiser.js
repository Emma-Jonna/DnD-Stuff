const classResult = document.querySelector(".class-result");
const randomClassButton = document.querySelector(".random-class-button");
const randomClassIcon2014 = document.querySelector(".random-class-icon-2014");
const randomClassIcon2024 = document.querySelector(".random-class-icon-2024");
const lineageResult = document.querySelector(".lineage-result");
const randomineageButton = document.querySelector(".random-lineage-button");

const classList = [
  {
    name: "Artificer",
    icons: {
      2014: "../assets/classIcons/2014/artificer.svg",
      2024: "../assets/classIcons/2014/artificer.svg",
    },
  },
  {
    name: "Barbarian",
    icons: {
      2014: "../assets/classIcons/2014/barbarian.svg",
      2024: "../assets/classIcons/2024/barbarian.svg",
    },
  },
  {
    name: "Bard",
    icons: {
      2014: "../assets/classIcons/2014/bard.svg",
      2024: "../assets/classIcons/2024/bard.svg",
    },
  },
  {
    name: "Cleric",
    icons: {
      2014: "../assets/classIcons/2014/cleric.svg",
      2024: "../assets/classIcons/2024/cleric.svg",
    },
  },
  {
    name: "Druid",
    icons: {
      2014: "../assets/classIcons/2014/druid.svg",
      2024: "../assets/classIcons/2024/druid.svg",
    },
  },
  {
    name: "Fighter",
    icons: {
      2014: "../assets/classIcons/2014/fighter.svg",
      2024: "../assets/classIcons/2024/fighter.svg",
    },
  },
  {
    name: "Monk",
    icons: {
      2014: "../assets/classIcons/2014/monk.svg",
      2024: "../assets/classIcons/2024/monk.svg",
    },
  },
  {
    name: "Paladin",
    icons: {
      2014: "../assets/classIcons/2014/paladin.svg",
      2024: "../assets/classIcons/2024/paladin.svg",
    },
  },
  {
    name: "Ranger",
    icons: {
      2014: "../assets/classIcons/2014/ranger.svg",
      2024: "../assets/classIcons/2024/ranger.svg",
    },
  },
  {
    name: "Rouge",
    icons: {
      2014: "../assets/classIcons/2014/rouge.svg",
      2024: "../assets/classIcons/2024/rouge.svg",
    },
  },
  {
    name: "Sorcerer",
    icons: {
      2014: "../assets/classIcons/2014/sorcerer.svg",
      2024: "../assets/classIcons/2024/sorcerer.svg",
    },
  },
  {
    name: "Warlock",
    icons: {
      2014: "../assets/classIcons/2014/warlock.svg",
      2024: "../assets/classIcons/2024/warlock.svg",
    },
  },
  {
    name: "Wizard",
    icons: {
      2014: "../assets/classIcons/2014/wizard.svg",
      2024: "../assets/classIcons/2024/wizard.svg",
    },
  },
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

const getOneRandomIndexFromList = (itemList, elementContainer) => {
  let index = randomNumber(itemList.length) - 1;

  while (index == elementContainer.value) {
    index = randomNumber(itemList.length) - 1;
  }

  return index;
};

randomClassButton.addEventListener("click", () => {
  const classIndex = getOneRandomIndexFromList(classList, classResult);

  classResult.textContent = classList[classIndex].name;
  classResult.value = classIndex;
  randomClassIcon2014.src = classList[classIndex].icons[2014];
  randomClassIcon2024.src = classList[classIndex].icons[2024];
});

randomineageButton.addEventListener("click", () => {
  const lineageIndex = getOneRandomIndexFromList(lineages, lineageResult);

  lineageResult.textContent = lineages[lineageIndex];
  lineageResult.value = lineageIndex;
});

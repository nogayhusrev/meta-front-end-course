var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money",
};

console.log(assistantManager);

assistantManager.print = function print() {
  console.log("Hello world");
};

assistantManager.print();

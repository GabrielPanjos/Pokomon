export default class Character {
  constructor(name, level = 1, exp = 0, baseStats = {}, gold = 0) {
    this.name = name;
    this.level = level;
    this.exp = exp;
    this.baseStats = baseStats;
    this.gold = gold;
  }
}

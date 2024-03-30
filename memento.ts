export const Game = {
  currentLevel: 1,
  healthLevel: 90,
  money: 789,

  makeSnapshot() {
    return {
      currentLevel: this.currentLevel,
      healthLevel: this.healthLevel,
      money: this.money,
    };
  },

  restore({ currentLevel, healthLevel, money }) {
    this.currentLevel = currentLevel;
    this.healthLevel = healthLevel;
    this.money = money;
  },
};

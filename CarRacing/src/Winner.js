class Winner {
  constructor(cars) {
    this.cars = cars;
    this.winners = [];
  }

  countMax() {
    return Math.max(...Object.values(this.cars));
  }

  showWinners(max) {
    Object.keys(this.cars).forEach(key => {
      if (this.cars[key] === max) {
        this.winners.push(key);
      }
    });

    return this.winners;
  }
}

export default Winner;

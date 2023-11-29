class Winner {
  #winners = [];

  constructor(cars) {
    this.cars = cars;
  }

  showWinners() {
    const max = Math.max(...Object.values(this.cars));

    Object.keys(this.cars).forEach(car => {
      if (this.cars[car] === max) {
        this.#winners.push(car);
      }
    });

    return this.#winners;
  }
}

export default Winner;

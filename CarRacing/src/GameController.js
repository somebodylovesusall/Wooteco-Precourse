import Car from './Car.js';
import Winner from './Winner.js';
import { ONE } from './constants/numbers.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class GameController {
  #car;

  async raceCars() {
    const cars = await Input.enterCarNames();
    const trial = await Input.enterTrialNumber();
    this.#car = new Car(cars);

    Output.printGameResult();
    let round = ONE;
    while (round <= trial) {
      const cars = this.makeRoundResult();
      Output.printRoundResult(cars);
      round = round + ONE;
    }

    const winners = this.makeFinalWinners();
    Output.printFinalWinners(winners);
  }

  makeRoundResult() {
    const cars = this.#car.getCars();

    Object.keys(cars).forEach(car => {
      const goOrStop = this.#car.isGoOrStop();
      cars[car] = cars[car] + goOrStop;
    });

    return cars;
  }

  makeFinalWinners() {
    const cars = this.#car.getCars();
    const winner = new Winner(cars);
    const winners = winner.showWinners();

    return winners;
  }
}

export default GameController;

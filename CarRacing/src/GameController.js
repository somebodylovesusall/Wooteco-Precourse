import Car from './Car.js';
import Winner from './Winner.js';
import { ONE } from './constants/numbers.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class GameController {
  async raceCars() {
    const names = await Input.enterCarNames();
    const trial = await Input.enterTrialNumber();
    const car = new Car(names);

    let count = ONE;
    while (count <= trial) {
      const cars = this.makeCars(car);
      Output.printGameResult(count, cars);
      count = count + ONE;
    }

    const winners = this.makeWinners(car);
    Output.printFinalWinners(winners);
  }

  makeCars(car) {
    const cars = car.getCars();

    Object.keys(cars).forEach(key => {
      const randomNumber = car.pickRandomNumber();
      const goOrStop = car.isGoOrStop(randomNumber);
      cars[key] = cars[key] + goOrStop;
    });

    return cars;
  }

  makeWinners(car) {
    const cars = car.getCars();
    const winner = new Winner(cars);

    const max = winner.countMax();
    const winners = winner.showWinners(max);

    return winners;
  }
}

export default GameController;

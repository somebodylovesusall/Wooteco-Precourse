import Input from './views/Input.js';
import Output from './views/Output.js';
import Computer from './Computer.js';
import Game from './Game.js';
import { ZERO, ONE, TWO, THREE } from './constants/numbers.js';

class App {
  #flag;
  #computer = [];

  async play() {
    if (!this.#flag) {
      Output.printStart();
    }

    this.#computer = this.showComputer();
    this.showGame();
  }

  showComputer() {
    const computer = new Computer();
    return computer.pickRandomNumbers();
  }

  async showGame() {
    const user = await Input.enterNumbers();
    const game = new Game(user, this.#computer);
    const { strike, ball } = game.compareNumbers();
    this.showResult(strike, ball);
  }

  async showFlag() {
    this.#flag = await Input.enterFlag();

    if (Number(this.#flag) === ONE) {
      return this.play();
    }

    if (Number(this.#flag) === TWO) {
      return;
    }
  }

  showResult(strike, ball) {
    if (strike === THREE) {
      Output.printResult(strike, ball);
      Output.printOver();
      return this.showFlag();
    }

    if (strike > ZERO || ball > ZERO) {
      Output.printResult(strike, ball);
      return this.showGame();
    }

    Output.printDefault();
    return this.showGame();
  }
}

export default App;

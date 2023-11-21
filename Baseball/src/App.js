import Input from './views/Input.js';
import Output from './views/Output.js';
import Computer from './Computer.js';
import User from './User.js';
import Game from './Game.js';
import { ZERO, ONE, TWO, THREE } from './constants/numbers.js';

class App {
  #computer = [];

  async play() {
    Output.printStart();
    this.makeComputer();
    await this.makeUser();
  }

  makeComputer() {
    if (this.#computer.length === ZERO) {
      const computer = new Computer();
      this.#computer = computer.pickRandomNumbers();
    }
  }

  async makeUser() {
    const numbers = await Input.enterNumbers();
    const user = new User(numbers).getUser();
    return this.makeGame(user);
  }

  makeGame(user) {
    const game = new Game(user, this.#computer);
    const { strike, ball } = game.compareNumbers();
    return this.showResult(strike, ball);
  }

  async makeFlag() {
    const flag = await Input.enterFlag();

    if (Number(flag) === ONE) {
      this.#computer = [];
      this.makeComputer();
      return this.makeUser();
    }

    if (Number(flag) === TWO) {
      return;
    }
  }

  async showResult(strike, ball) {
    if (strike === THREE) {
      Output.printResult(strike, ball);
      Output.printEnd();
      return this.makeFlag();
    }

    if (strike > ZERO || ball > ZERO) {
      Output.printResult(strike, ball);
      return this.makeUser();
    }

    Output.printDefault();
    return this.makeUser();
  }
}

export default App;

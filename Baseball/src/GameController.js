import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './views/Input.js';
import Output from './views/Output.js';
import { START_INCLUSIVE, END_INCLUSIVE, ZERO, ONE, THREE, DIGIT, RESTART, EXIT } from './constants/numbers.js';

class GameController {
  constructor() {
    this.computer = [];
  }

  async playBaseball() {
    if (this.computer.length === ZERO) {
      this.makeComputer();
    }

    const user = await this.makeUser();
    const { strike, ball } = this.compareNumbers(user);
    this.makeResult(strike, ball);
    await this.isAgainOrEnd(strike);
  }

  makeComputer() {
    while (this.computer.length < DIGIT) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);
      if (!this.computer.includes(randomNumber)) {
        this.computer.push(randomNumber);
      }
    }
  }

  async makeUser() {
    const user = await Input.enterThreeDigitNumber();
    return user;
  }

  compareNumbers(user) {
    let strike = ZERO;
    let ball = ZERO;

    this.computer.forEach((number, index) => {
      if (number === user[index]) {
        strike = strike + ONE;
      }
      if (number !== user[index] && user.includes(number)) {
        ball = ball + ONE;
      }
    });
    
    return { strike, ball };
  }

  makeResult(strike, ball) {
    if (strike === ZERO && ball > ZERO) {
      return Output.printBall(ball);
    }

    if (strike > ZERO && ball === ZERO) {
      return Output.printStrike(strike);
    }

    if (strike > ZERO && ball > ZERO) {
      return Output.printStrikeBall(strike, ball);
    }

    return Output.printNothing();
  }

  isAgainOrEnd(strike) {
    if (strike === THREE) {
      Output.printEnd();
      return this.showRestartOrExit();
    }

    return this.playBaseball();
  }

  async showRestartOrExit() {
    const restartOrExit = await Input.enterRestartOrExit();

    if (restartOrExit === RESTART) {
      this.computer = [];
      return this.playBaseball();
    }

    if (restartOrExit === EXIT) {
      return;
    }
  }
}

export default GameController;

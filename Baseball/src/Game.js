import { DEFAULT, THREE, ZERO } from './constants/messages.js';

class Game {
  #computer;
  #user;

  constructor(computer, user) {
    this.#computer = computer;
    this.#user = user;
  }

  compareNumbers() {
    let digit = ZERO;
    let strike = ZERO;
    let ball = ZERO;

    this.#computer.forEach(number => {
      if (number === this.#user[digit]) {
        strike = this.isStrike(strike);
      }
      if (number !== this.#user[digit] && this.#user.includes[number]) {
        ball = this.isBall(ball);
      }
    });

    this.calculateResult(strike, ball);
  }

  calculateResult(strike, ball) {
    if (strike === ZERO && ball === ZERO) {
      return DEFAULT;
    }

    if (strike === THREE && ball === ZERO) {
      return this.isAllStrike(strike);
    }

    return { strike, ball };
  }

  isStrike(strike) {
    return strike + ONE;
  }

  isBall(ball) {
    return ball + ONE;
  }

  isAllStrike() {
    
  }
}

export default Game;

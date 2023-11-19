import { ONE, ZERO } from './constants/numbers.js';

class Game {
  #computer = [];
  #user = [];

  constructor(user, computer) {
    this.#user = user;
    this.#computer = computer;
  }

  compareNumbers() {
    let digit = ZERO;
    let strike = ZERO;
    let ball = ZERO;
    
    this.#computer.forEach(number => {
      if (number === this.#user[digit]) {
        strike = strike + ONE;
      }
      if (number !== this.#user[digit] && this.#user.includes(number)) {
        ball = ball + ONE;
      }
      digit = digit + ONE;
    });
    
    return { strike, ball };
  }
}

export default Game;

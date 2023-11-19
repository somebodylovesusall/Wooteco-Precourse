import { MissionUtils } from '@woowacourse/mission-utils';
import { ONE, THREE, NINE } from './constants/numbers.js';

class Computer {
  #computer = [];

  pickRandomNumbers() {
    while (this.#computer.length < THREE) {
      const number = MissionUtils.Random.pickNumberInRange(ONE, NINE);

      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }

    return this.#computer;
  }
}

export default Computer;

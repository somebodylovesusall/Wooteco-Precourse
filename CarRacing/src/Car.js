import { MissionUtils } from '@woowacourse/mission-utils';
import { START_INCLUSIVE, END_INCLUSIVE, ZERO, ONE, FOUR } from './constants/numbers.js';

class Car {
  #cars = {};

  constructor(cars) {
    cars.forEach(car => {
      this.#cars[car] = ZERO;
    });
  }

  getCars() {
    return this.#cars;
  }

  isGoOrStop() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);

    if (randomNumber >= FOUR) {
      return ONE;
    }
    return ZERO;
  }
}

export default Car;

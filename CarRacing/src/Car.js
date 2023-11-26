import { MissionUtils } from '@woowacourse/mission-utils';
import { START_INCLUSIVE, END_INCLUSIVE, ZERO, ONE, FOUR, NINE } from './constants/numbers.js';

class Car {
  constructor(names) {
    this.cars = {};
    names.forEach(key => {
      this.cars[key] = ZERO;
    });
  }

  getCars() {
    return this.cars;
  }

  pickRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);
  }

  isGoOrStop(randomNumber) {
    if (randomNumber >= FOUR && randomNumber <= NINE) {
      return ONE;
    }

    return ZERO;
  }
}

export default Car;

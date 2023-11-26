import { MissionUtils } from '@woowacourse/mission-utils';
import { START_INCLUSIVE, END_INCLUSIVE, ZERO, ONE, FOUR, NINE } from './constants/numbers';

class Car {
  constructor(names) {
    this.cars = names.forEach(key => {
      this.cars[key] = ZERO;
    });
  }

  pickRandomNumbers() {
    return MissionUtils.Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);
  }

  isGoOrStop(value) {
    let goOrStop = value;
    if (goOrStop >= FOUR && goOrStop <= NINE) {
      goOrStop = goOrStop + ONE;
    }

    return goOrStop;
  }
}

export default Car;

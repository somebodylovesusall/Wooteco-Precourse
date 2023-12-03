import { MissionUtils } from '@woowacourse/mission-utils';
import { PRICE_UNIT, ONE, START_INCLUSIVE, END_INCLUSIVE, LOTTO_COUNT } from './constants/numbers.js';
class Lotto {
  #numbers = [];

  constructor(price) {
    this.amount = price / PRICE_UNIT;
  }

  makeLottos() {
    let count = ONE;
    while (count <= this.amount) {
      this.#numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(START_INCLUSIVE, END_INCLUSIVE, LOTTO_COUNT).sort((prev, curr) => prev - curr));
      count = count + ONE;
    }
    
    return this.#numbers;
  }
}

export default Lotto;

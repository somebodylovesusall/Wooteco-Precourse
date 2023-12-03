import { MissionUtils } from '@woowacourse/mission-utils';
import { PRICE_UNIT, ONE, START_INCLUSIVE, END_INCLUSIVE, LOTTO_NUMBER_COUNT } from './constants/numbers.js';
class Lotto {
  #numbers = [];

  constructor(price) {
    this.amount = price / PRICE_UNIT;
  }

  makeLottos() {
    let amount = ONE;
    while (amount <= this.amount) {
      this.#numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(START_INCLUSIVE, END_INCLUSIVE, LOTTO_NUMBER_COUNT).sort((prev, curr) => prev - curr));
      amount = amount + ONE;
    }
    
    return this.#numbers;
  }
}

export default Lotto;

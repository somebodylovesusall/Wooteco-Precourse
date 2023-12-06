import { MissionUtils } from '@woowacourse/mission-utils';
import { PRICE_UNIT, ONE, START_INCLUSIVE, END_INCLUSIVE, LOTTO_NUMBER_COUNT } from './constants/numbers.js';

class Lotto {
  #numbers = [];

  makeLottos(price) {
    let amount = ONE;
    while (amount <= (price / PRICE_UNIT)) {
      this.#numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(START_INCLUSIVE, END_INCLUSIVE, LOTTO_NUMBER_COUNT).sort((prev, curr) => prev - curr));
      amount = amount + ONE;
    }
    
    return this.#numbers;
  }
}

export default Lotto;

import { MissionUtils } from '@woowacourse/mission-utils';
import { COMMA, INPUT, NEWLINE } from '../constants/messages.js';
import Validator from '../validation/Validator.js';

const Input = {
  async enterPrice() {
    const price = await MissionUtils.Console.readLineAsync(`${INPUT.price}${NEWLINE}`);
    Validator.validatePrice(price);
    return Number(price);
  },

  async enterWinning() {
    const winning = await MissionUtils.Console.readLineAsync(`${INPUT.winning}${NEWLINE}`);
    Validator.validateWinning(winning);
    return winning.split(COMMA).map(number => Number(number));
  },

  async enterBonus() {
    const bonus = await MissionUtils.Console.readLineAsync(`${INPUT.bonus}${NEWLINE}`);
    Validator.validateBonus(bonus);
    return Number(bonus);
  },
}

export default Input;

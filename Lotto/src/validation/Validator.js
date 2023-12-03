import { ERROR } from '../constants/messages.js';
import { PRICE_UNIT, ZERO } from '../constants/numbers.js';

const Validator = {
  validatePrice(price) {
    if (!Number(price)) {
      throw new Error(ERROR.not_a_valid_price);
    }

    if (Number(price) % PRICE_UNIT !== ZERO) {
      throw new Error(ERROR.not_a_valid_price);
    }
  },
  
  validateWinning(winning) {

  },

  validateBonus(bonus) {

  },
}

export default Validator;

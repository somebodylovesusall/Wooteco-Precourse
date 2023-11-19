import { ERROR } from '../constants/messages.js';
import { ONE, TWO } from '../constants/numbers.js';

const Validator = {
  validateNumbers(numbers) {
    if (!/^[1-9]{3}$/.test(numbers)) {
      throw new Error(ERROR.not_a_valid_number);
    }

    if (/(.).*?\1/.test(numbers)) {
      throw new Error(ERROR.not_a_valid_number);
    }
  },

  validateFlag(flag) {
    if (Number(flag) !== ONE && Number(flag) !== TWO) {
      throw new Error(ERROR.not_a_valid_number);
    }
  },
};

export default Validator;

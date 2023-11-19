import { ERROR } from '../constants/messages.js';
import { ONE, THREE, TWO, NINE } from '../constants/numbers.js';

const Validator = {
  validateNumbers(numbers) {
    if (!/^[1-9]{3}$/.test(numbers)) {
      throw new Error(ERROR.not_a_valid_number);
    }

    const user = numbers.split('').map(number => Number(number));
    return user;
  },

  validateDuplication(user) {
    const uniqueNumbers = [...new Set(user)];
    if (user.length !== uniqueNumbers.length) {
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

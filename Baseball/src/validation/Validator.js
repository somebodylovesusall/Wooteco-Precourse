import { ERROR } from '../constants/messages.js';
import { RESTART, EXIT } from '../constants/numbers.js';

const Validator = {
  validateThreeDigitNumber(threeDigitNumber) {
    if (!/^[1-9]{3}$/.test(threeDigitNumber)) {
      throw new Error(ERROR.not_a_valid_number);
    }

    if (/(.).*?\1/.test(threeDigitNumber)) {
      throw new Error(ERROR.not_a_valid_number);
    }
  },

  validateRestartOrExit(restartOrExit) {
    if (Number(restartOrExit) !== RESTART && Number(restartOrExit) !== EXIT) {
      throw new Error(ERROR.not_a_valid_number);
    }
  },
};

export default Validator;

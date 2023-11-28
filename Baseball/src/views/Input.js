import { MissionUtils } from '@woowacourse/mission-utils';
import { BLANK, INPUT, LINE_BREAK } from '../constants/messages.js';
import Validator from '../validation/Validator.js';

const Input = {
  async enterThreeDigitNumber() {
    const threeDigitNumber = await MissionUtils.Console.readLineAsync(INPUT.three_digit_number);
    Validator.validateThreeDigitNumber(threeDigitNumber);
    return threeDigitNumber.split(BLANK).map(oneDigitNumber => Number(oneDigitNumber));
  },

  async enterRestartOrExit() {
    const restartOrExit = await MissionUtils.Console.readLineAsync(`${INPUT.restart_or_exit}${LINE_BREAK}`);
    Validator.validateRestartOrExit(restartOrExit);
    return Number(restartOrExit);
  },
};

export default Input;

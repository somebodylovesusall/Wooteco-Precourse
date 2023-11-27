import { MissionUtils } from '@woowacourse/mission-utils';
import { COMMA, INPUT, LINE_BREAK } from '../constants/messages.js';
import Validator from '../validation/Validator.js';

const Input = {
  async enterCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(`${INPUT.car_names}${LINE_BREAK}`);
    Validator.validateCarNames(carNames);
    return carNames.split(COMMA).map(name => name.trim());
  },

  async enterTrialNumber() {
    const trialNumber = await MissionUtils.Console.readLineAsync(`${INPUT.trial_number}${LINE_BREAK}`);
    Validator.validateTrialNumber(trialNumber);
    return Number(trialNumber);
  },
};

export default Input;

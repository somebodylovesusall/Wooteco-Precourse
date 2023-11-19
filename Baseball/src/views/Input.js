import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT, LINE_BREAK } from '../constants/messages.js';
import User from '../User.js';
import Validator from '../validation/Validator.js';

const Input = {
  async enterNumbers() {
    try {
      const numbers = await MissionUtils.Console.readLineAsync(INPUT.number);
      const user = new User(numbers);
      return user.getUser();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async enterFlag() {
    try {
      const flag = await MissionUtils.Console.readLineAsync(`${INPUT.flag}${LINE_BREAK}`);
      Validator.validateFlag(flag);
      return flag;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default Input;

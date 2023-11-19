import { MissionUtils } from '@woowacourse/mission-utils';
import { BALL, DEFAULT, OUTPUT, STRIKE } from '../constants/messages.js';
import { ZERO } from '../constants/numbers.js';

const Output = {
  printStart() {
    MissionUtils.Console.print(OUTPUT.start);
  },

  printResult(strike, ball) {
    if (strike === ZERO && ball > ZERO) {
      MissionUtils.Console.print(`${ball}${BALL}`);
    }

    if (strike > ZERO && ball === ZERO) {
      MissionUtils.Console.print(`${strike}${STRIKE}`);
    }

    if (strike > ZERO && ball > ZERO) {
      MissionUtils.Console.print(`${ball}${BALL}${strike}${STRIKE}`);
    }
  },

  printDefault() {
    return MissionUtils.Console.print(DEFAULT);
  },

  printOver() {
    MissionUtils.Console.print(OUTPUT.end);
  },
};

export default Output;

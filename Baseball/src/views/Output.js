import { MissionUtils } from '@woowacourse/mission-utils';
import { BALL, NOTHING, OUTPUT, STRIKE } from '../constants/messages.js';

const Output = {
  printStart() {
    MissionUtils.Console.print(OUTPUT.start);
  },

  printBall(ball) {
    MissionUtils.Console.print(`${ball}${BALL}`);
  },

  printStrike(strike) {
    MissionUtils.Console.print(`${strike}${STRIKE}`);
  },

  printStrikeBall(strike, ball) {
    MissionUtils.Console.print(`${ball}${BALL} ${strike}${STRIKE}`);
  },

  printNothing() {
    MissionUtils.Console.print(NOTHING);
  },

  printEnd() {
    MissionUtils.Console.print(OUTPUT.end);
  },
};

export default Output;

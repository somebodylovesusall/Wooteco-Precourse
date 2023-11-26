import { MissionUtils } from '@woowacourse/mission-utils';
import { ONE } from '../constants/numbers.js';
import { COMMA, COLON, HYPHEN, LINE_BREAK, OUTPUT } from '../constants/messages.js';

const Output = {
  printGameResult(count, cars) {
    if (count === ONE) {
      MissionUtils.Console.print(`${LINE_BREAK}${OUTPUT.game_result}`);
    }

    Object.entries(cars).forEach(([key, value]) => {
      MissionUtils.Console.print(`${key} ${COLON} ${HYPHEN.repeat(value)}`);
    });

    MissionUtils.Console.print(LINE_BREAK);
  },

  printFinalWinners(winners) {
    MissionUtils.Console.print(`${OUTPUT.final_winners} ${COLON} ${winners.join(`${COMMA} `)}`);
  },
};

export default Output;

import { MissionUtils } from '@woowacourse/mission-utils';
import { COMMA, COLON, HYPHEN, LINE_BREAK, OUTPUT } from '../constants/messages.js';

const Output = {
  printGameResult() {
    MissionUtils.Console.print(`${LINE_BREAK}${OUTPUT.game_result}`);
  },

  printRaceResult(cars) {
    Object.entries(cars).forEach(([car, result]) => {
      MissionUtils.Console.print(`${car} ${COLON} ${HYPHEN.repeat(result)}`);
    });

    MissionUtils.Console.print(LINE_BREAK);
  },

  printFinalWinners(winners) {
    MissionUtils.Console.print(`${OUTPUT.final_winners} ${COLON} ${winners.join(`${COMMA} `)}`);
  },
};

export default Output;

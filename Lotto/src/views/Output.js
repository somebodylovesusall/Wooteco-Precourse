import { MissionUtils } from '@woowacourse/mission-utils';
import { COMMA, COUNT, LOTTOS, NEWLINE } from '../constants/messages.js';

const Output =  {
  printLottos(lottos) {
    const totalLottos = lottos.map(lotto => `[${lotto.join(`${COMMA} `)}]`).join(NEWLINE);
    MissionUtils.Console.print(`${NEWLINE}${lottos.length}${LOTTOS}${NEWLINE}${totalLottos}`);
    MissionUtils.Console.print(`${NEWLINE}`);
  },

  printStatistics() {

  },

  printGrossProfit() {

  },
}

export default Output;

import { MissionUtils } from '@woowacourse/mission-utils';
import { COMMA, NEWLINE, OUTPUT } from '../constants/messages.js';
import { ONE } from '../constants/numbers.js';

const Output =  {
  printLottos(lottos) {
    const totalLottos = lottos.map(lotto => `[${lotto.join(`${COMMA} `)}]`).join(NEWLINE);
    MissionUtils.Console.print(`${NEWLINE}${lottos.length}${OUTPUT.lottos}${NEWLINE}${totalLottos}`);
    MissionUtils.Console.print(`${NEWLINE}`);
  },

  printStatistics(matches) {
    MissionUtils.Console.print(OUTPUT.statistics);
    MissionUtils.Console.print(`${OUTPUT.three_match}${matches.three}${OUTPUT.count}`);
    MissionUtils.Console.print(`${OUTPUT.four_match}${matches.four}${OUTPUT.count}`);
    MissionUtils.Console.print(`${OUTPUT.five_match}${matches.five}${OUTPUT.count}`);
    MissionUtils.Console.print(`${OUTPUT.five_plus_bonus_match}${matches.fivePlusBonus}${OUTPUT.count}`);
    MissionUtils.Console.print(`${OUTPUT.six_match}${matches.six}${OUTPUT.count}`);
  },

  printGrossProfit(grossProfit) {
    MissionUtils.Console.print(`${OUTPUT.gross_profit}${grossProfit.toFixed(ONE).replace(/\B(?=(\d{3})+(?!\d))/g, COMMA)}${OUTPUT.percent}`);
  },
}

export default Output;

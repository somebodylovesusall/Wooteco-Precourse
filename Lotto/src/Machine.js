import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Input from './views/Input.js';
import Output from './views/Output.js';
import { PRIZE, ZERO, ONE, THREE, FOUR, FIVE, SIX, PRICE_UNIT, HUNDRED } from './constants/numbers.js';

class Machine {
  #lottos;
  #winning;
  #bonus;

  async playLotto() {
    try {
      const price = await Input.enterPrice();
      const lotto = new Lotto(price);
      this.#lottos = lotto.makeLottos();
      Output.printLottos(this.#lottos);
      return this.#lottos;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.playLotto();
    }
  }

  async makeWinning() {
    try {
      this.#winning = await Input.enterWinning();
      return this.#winning;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.makeWinning();
    }
  }

  async makeBonus(winning) {
    try {
      this.#bonus = await Input.enterBonus(winning);
      return this.#bonus;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.makeBonus(winning);
    }
  }

  compareLottos(lotto) {
    let winningCount = ZERO;
    let bonusCount = ZERO;

    lotto.forEach(number => {
      if (this.#winning.includes(number)) {
        winningCount = winningCount + ONE;
      }

      if (this.#bonus === number) {
        bonusCount = bonusCount + ONE;
      }
    });

    return { winningCount, bonusCount };
  }

  showStatistics(matches) {
    Output.printStatistics(matches);
  }

  showGrossProfit(grossProfit) {
    Output.printGrossProfit(grossProfit);
  }

  calculateMatches() {
    const matches = { three: ZERO, four: ZERO, five: ZERO, fivePlusBonus: ZERO, six: ZERO };
    this.#lottos.forEach(lotto => {
      const { winningCount, bonusCount } = this.compareLottos(lotto);
      if (winningCount === THREE) {
        matches.three = matches.three + ONE;
      } else if (winningCount === FOUR) {
        matches.four = matches.four + ONE;
      } else if (winningCount === FIVE && bonusCount === ZERO) {
        matches.five = matches.five + ONE;
      } else if (winningCount === FIVE && bonusCount === ONE) {
        matches.fivePlusBonus = matches.fivePlusBonus + ONE;
      } else if (winningCount === SIX) {
        matches.six = matches.six + ONE;
      }
    });

    return matches;
  }

  calculateGrossProfit(matches) {
    let prize = ZERO;
    Object.keys(matches).forEach(number => {
      prize = prize + matches[number] * PRIZE[number];
    });
    const grossProfit = prize / (this.#lottos.length * PRICE_UNIT) * HUNDRED;

    return grossProfit;
  }
}

export default Machine;

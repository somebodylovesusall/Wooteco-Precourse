import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

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
      return this.makeBonus(this.#winning);
    }
  }
}

export default Machine;

import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class Machine {
  #lottos;

  async playLotto() {
    try {
      const price = await Input.enterPrice();
      const lotto = new Lotto(price);
      this.#lottos = lotto.makeLottos();

      Output.printLottos(this.#lottos);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.playLotto();
    }
  }

  async makeWinning() {
    try {

    } catch (error) {

    }
  }

  async makeBonus() {
    try {

    } catch (error) {
      
    }
  }
}

export default Machine;

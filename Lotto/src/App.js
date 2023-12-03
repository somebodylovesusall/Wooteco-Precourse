import Machine from './Machine.js';

class App {
  async play() {
    const machine = new Machine();
    await machine.playLotto();
    const winning = await machine.makeWinning();
    await machine.makeBonus(winning);
    const matches = machine.calculateMatches();
    const grossProfit = machine.calculateGrossProfit(matches);
    machine.showStatistics(matches);
    machine.showGrossProfit(grossProfit);
  }
}

export default App;

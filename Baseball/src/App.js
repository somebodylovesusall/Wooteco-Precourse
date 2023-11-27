import Output from './views/Output.js';
import GameController from './GameController.js';

class App {
  async play() {
    Output.printStart();

    const game = new GameController();
    await game.playBaseball();
  }
}

export default App;

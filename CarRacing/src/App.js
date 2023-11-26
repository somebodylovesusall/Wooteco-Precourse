import GameController from './GameController.js';

class App {
  async play() {
    const game = new GameController();
    await game.raceCars();
  }
}

export default App;

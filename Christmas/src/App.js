import Planner from './Planner.js';
import Event from './Event.js';
class App {
  async run() {
    const planner = new Planner();
    planner.showGreeting();
    const date = await planner.makeDate();
    const order = await planner.makeOrder();
    planner.showResult(date, order);
  }
}

const app = new App();
app.run();

export default App;

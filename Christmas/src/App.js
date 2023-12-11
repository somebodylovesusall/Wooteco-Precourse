import Planner from './Planner.js';

class App {
  async run() {
    const planner = new Planner();
    planner.showGreeting();
    const date = await planner.makeDate();
    const order = await planner.makeOrder();
    const event = planner.makeEvent(date, order);
    planner.showResult(date, order, event);
  }
}

export default App;

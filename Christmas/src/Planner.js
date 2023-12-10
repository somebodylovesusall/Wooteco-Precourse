import Input from './views/Input.js';
import Output from './views/Output.js';

class Planner {
  #order;

  async makeDate() {
    try {
      const date = await Input.readDate();
      return date;
    } catch (error) {
      Output.printError(error.message);
      return this.makeDate();
    }
  }

  async makeOrder() {
    try {
      const order = await Input.readOrder();
      console.log(order);
      return order;
    } catch (error) {
      Output.printError(error.message);
      return this.makeOrder();
    }
  }

  makeEvent() {

  }
};

const planner = new Planner();
await planner.makeDate();
await planner.makeOrder();

export default Planner;

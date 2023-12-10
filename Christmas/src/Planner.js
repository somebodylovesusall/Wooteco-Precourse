import Event from './Event.js';
import Badge from './Badge.js';
import Input from './views/Input.js';
import Output from './views/Output.js';
import { MENU } from './constants/menus.js';
import { MIN_EVENT_PRICE, ZERO } from './constants/numbers.js';

class Planner {
  #totalOrder;

  showGreeting() {
    Output.printGreeting();
  }

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
      return order;
    } catch (error) {
      Output.printError(error.message);
      return this.makeOrder();
    }
  }

  calculateTotalOrder(order) {
    let totalOrder = ZERO;

    Object.keys(order).forEach(menu => {
      totalOrder = totalOrder + MENU[menu] * order[menu];
    });

    this.#totalOrder = totalOrder;
    return this.#totalOrder;
  }

  makeEvent(date, order) {
    if (this.#totalOrder >= MIN_EVENT_PRICE) {
      const event = new Event(date, order);
      return event;
    }
  }

  makeBenefit() {

  }

  calculateTotalBenefit(event) {
    const totalDiscount = event.calculateTotalDiscount();
    const free = event.calculateFree(this.#totalOrder);

    return totalDiscount + free;
  }

  calculateTotalPay(event) {
    const totalDiscount = event.calculateTotalDiscount();
    return this.#totalOrder - totalDiscount;
  }

  makeBadge(totalBenefit) {
    const badge = new Badge(totalBenefit);
    return badge;
  }

  showResult(date, order) {
    Output.printPreview(date);
    Output.printOrder(order);
    this.calculateTotalOrder(order);

    const event = this.makeEvent(date, order);
    const free = event ? event.calculateFree(this.#totalOrder) : ZERO;
    const totalBenefit = event ? this.calculateTotalBenefit(event) : ZERO;
    const totalPay = event ? this.calculateTotalPay(event) : this.#totalOrder;
    const badge = this.makeBadge(totalBenefit);

    Output.printTotalOrder(this.#totalOrder);
    Output.printFree(free);
    Output.printBenefit();
    Output.printTotalBenefit(totalBenefit);
    Output.printTotalPay(totalPay);
    Output.printBadge(badge);
  }
};

export default Planner;

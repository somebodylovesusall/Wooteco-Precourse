import Event from './Event.js';
import Badge from './Badge.js';
import Input from './views/Input.js';
import Output from './views/Output.js';
import { MENU } from './constants/menus.js';
import { FREE_PRICE, MIN_EVENT_PRICE, ZERO } from './constants/numbers.js';
import { DEFAULT } from './constants/messages.js';

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
    this.calculateTotalOrder(order);

    if (this.#totalOrder >= MIN_EVENT_PRICE) {
      const event = new Event(date, order);
      return event;
    }
  }

  calculateBenefit(discount, free) {
    const benefit = { ...discount };
    
    if (free === FREE_PRICE) {
      benefit.free = FREE_PRICE;
    }

    return benefit;
  }

  calculateTotalBenefit(benefit) {
    let totalBenefit = ZERO;

    Object.keys(benefit).forEach(type => {
      totalBenefit = totalBenefit + benefit[type];
    });

    return totalBenefit;
  }

  calculateTotalPay(totalDiscount) {
    return this.#totalOrder - totalDiscount;
  }

  makeBadge(totalBenefit) {
    const badge = new Badge(totalBenefit);
    const decemberBadge = badge.awardBadge();
    return decemberBadge;
  }

  makeResult(event) {
    if (event) {
      const free = event.calculateFree(this.#totalOrder);
      const discount = event.calculateDiscount();
      const totalDiscount = event.calculateTotalDiscount(discount);
      const benefit = this.calculateBenefit(discount, free);
      const totalBenefit = this.calculateTotalBenefit(benefit);
      const totalPay = this.calculateTotalPay(totalDiscount);
      const badge = this.makeBadge(totalBenefit);

      return { free, benefit, totalBenefit, totalPay, badge };
    }

    return { free: ZERO, benefit: DEFAULT, totalBenefit: ZERO, totalPay: this.#totalOrder, badge: DEFAULT };
  }

  showResult(date, order, event) {
    const { free, benefit, totalBenefit, totalPay, badge } = this.makeResult(event);

    Output.printPreview(date);
    Output.printOrder(order);
    Output.printTotalOrder(this.#totalOrder);
    Output.printFree(free);
    Output.printBenefit(benefit);
    Output.printTotalBenefit(totalBenefit);
    Output.printTotalPay(totalPay);
    Output.printBadge(badge);
  }
};

export default Planner;

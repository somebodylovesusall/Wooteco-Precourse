import { Console } from '@woowacourse/mission-utils';
import { DEFAULT, NEWLINE, OUTPUT, QUANTITY } from '../constants/messages.js';
import { ZERO, ONE, FREE_PRICE } from '../constants/numbers.js';
import { FREE_MENU } from '../constants/menus.js';

const Output = {
  printGreeting() {
    Console.print(OUTPUT.greeting);
  },

  printPreview(date) {
    Console.print(OUTPUT.preview(date));
  },

  printOrder(order) {
    Console.print(OUTPUT.order);

    Object.keys(order).forEach(menu => {
      Console.print(`${menu} ${order[menu]}${QUANTITY}`);
    });
  },

  printTotalOrder(totalOrder) {
    Console.print(`${NEWLINE}${OUTPUT.total_order(totalOrder)}`);
  },

  printFree(free) {
    Console.print(OUTPUT.free);

    if (free === FREE_PRICE) { 
      Console.print(`${FREE_MENU} ${ONE}${QUANTITY}${NEWLINE}`);
      return;
    }

    Console.print(`${DEFAULT}${NEWLINE}`);
  },

  printBenefit() {
    Console.print(OUTPUT.benefit);
    Console.print(NEWLINE);
  },

  printTotalBenefit(totalBenefit) {
    Console.print(OUTPUT.total_benefit(totalBenefit));
  },

  printTotalPay(totalPay) {
    Console.print(OUTPUT.total_pay(totalPay));
  },

  printBadge(badge) {
    Console.print(OUTPUT.badge(badge));
  },
  
  printError(error) {
    Console.print(error);
  },
}

export default Output;

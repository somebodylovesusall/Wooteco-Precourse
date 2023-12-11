import { Console } from '@woowacourse/mission-utils';
import { KO_KR, DEFAULT, NEWLINE, OUTPUT, QUANTITY, MINUS, WON, BENEFIT } from '../constants/messages.js';
import { ZERO, ONE } from '../constants/numbers.js';
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

    if (free === ZERO) {
      Console.print(`${DEFAULT}${NEWLINE}`);
      return;
    }

    Console.print(`${FREE_MENU} ${ONE}${QUANTITY}${NEWLINE}`);
  },

  printBenefit(benefit) {
    Console.print(OUTPUT.benefit);

    if (benefit === DEFAULT) {
      Console.print(`${DEFAULT}${NEWLINE}`);
      return;
    }

    Object.keys(benefit).forEach(type => {
      if (benefit[type] > ZERO) {
        Console.print(`${BENEFIT[type]}${MINUS}${benefit[type].toLocaleString(KO_KR)}${WON}`);
      }
    });
  },

  printTotalBenefit(totalBenefit) {
    Console.print(`${NEWLINE}${OUTPUT.total_benefit}`);
    
    if (totalBenefit === ZERO) {
      Console.print(`${ZERO}${WON}${NEWLINE}`);
      return;
    }

    Console.print(`${MINUS}${totalBenefit.toLocaleString(KO_KR)}${WON}${NEWLINE}`);
  },

  printTotalPay(totalPay) {
    Console.print(OUTPUT.total_pay(totalPay));
  },

  printBadge(badge) {
    if (badge === DEFAULT) {
      Console.print(OUTPUT.badge(DEFAULT));
      return;
    }

    Console.print(OUTPUT.badge(badge));
  },
  
  printError(error) {
    Console.print(error);
  },
}

export default Output;

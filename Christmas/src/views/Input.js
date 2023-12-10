import { Console } from '@woowacourse/mission-utils';
import { COMMA, INPUT } from '../constants/messages.js';
import Validator from '../validation/Validator.js';

const Input = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT.date);
    Validator.validateDate(date);
    return Number(date);
  },

  async readOrder() {
    const order = await Console.readLineAsync(INPUT.order);
    const validatedOrder = Validator.validateOrder(order.split(COMMA));
    Validator.validateMenu(order.split(COMMA), validatedOrder);
    Validator.validateQuantity(validatedOrder);
    return validatedOrder;
  },
}

export default Input;

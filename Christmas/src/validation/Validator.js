import { HYPHEN, ERROR } from '../constants/messages.js';
import { END_DATE, MAX_ORDER_QUANTITY, ONE, START_DATE, ZERO } from '../constants/numbers.js';
import { FOOD, DRINK } from '../constants/menus.js';

const Validator = {
  validateDate(date) {
    if (!Number(date) || !Number.isInteger(Number(date))) {
      throw new Error(ERROR.not_a_valid_date);
    }

    if (Number(date) < START_DATE || Number(date) > END_DATE) {
      throw new Error(ERROR.not_a_valid_date);
    }
  },

  validateOrder(orders) {
    orders.forEach(order => {
      if (!/^[가-힣]+\-\d+$/.test(order)) {
        throw new Error(ERROR.not_a_valid_order);
      }
    });

    const validatedOrder = orders.reduce((result, order) => {
      const [menu, quantity] = order.split(HYPHEN);
      result[menu] = Number(quantity);
      return result;
    }, {});

    return validatedOrder;
  },

  validateMenu(order, validatedOrder) {
    if (order.length !== Object.keys(validatedOrder).length) {
      throw new Error(ERROR.not_a_valid_order);
    }

    const onlyMenu = Object.keys(validatedOrder).every(menu => FOOD.includes(menu));
    if (!onlyMenu) {
      throw new Error(ERROR.not_a_valid_order);
    }

    const onlyDrink = Object.keys(validatedOrder).every(menu => DRINK.includes(menu));
    if (onlyDrink) {
      throw new Error(ERROR.not_a_valid_order);
    }
  },

  validateQuantity(validatedOrder) {
    let totalQuantity = ZERO;

    Object.values(validatedOrder).forEach(quantity => {
      if (quantity < ONE) {
        throw new Error(ERROR.not_a_valid_order);
      }

      totalQuantity = totalQuantity + quantity;
    });

    if (totalQuantity > MAX_ORDER_QUANTITY) {
      throw new Error(ERROR.not_a_valid_order);
    }
  },
}

export default Validator;

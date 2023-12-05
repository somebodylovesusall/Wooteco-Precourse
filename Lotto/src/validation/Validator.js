import { ERROR, COMMA } from '../constants/messages.js';
import { END_INCLUSIVE, LOTTO_NUMBER_COUNT, PRICE_UNIT, START_INCLUSIVE, ZERO } from '../constants/numbers.js';

const Validator = {
  validatePrice(price) {
    if (!Number(price)) {
      throw new Error(ERROR.not_a_valid_price);
    }

    if (Number(price) < PRICE_UNIT) {
      throw new Error(ERROR.not_a_valid_price);
    }

    if (Number(price) % PRICE_UNIT !== ZERO) {
      throw new Error(ERROR.not_a_valid_price);
    }
  },
  
  validateWinning(winning) {
    const winningNumbers = winning.split(COMMA);
    if (winningNumbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR.not_a_valid_winning);
    }

    if (winningNumbers.length !== new Set(winningNumbers).size) {
      throw new Error(ERROR.not_a_valid_winning);
    }

    winningNumbers.forEach(number => {
      if (!Number(number) || !Number.isInteger(Number(number) || Number(number) < START_INCLUSIVE || Number(number) > END_INCLUSIVE)) {
        throw new Error(ERROR.not_a_valid_winning);
      }
    });
  },

  validateBonus(winning, bonus) {
    if (!Number(bonus) || !Number.isInteger(Number(bonus))) {
      throw new Error(ERROR.not_a_valid_bonus);
    }

    if (Number(bonus) < START_INCLUSIVE || Number(bonus) > END_INCLUSIVE) {
      throw new Error(ERROR.not_a_valid_bonus);
    }

    if (winning.includes(Number(bonus))) {
      throw new Error(ERROR.not_a_valid_bonus);
    }
  },
}

export default Validator;

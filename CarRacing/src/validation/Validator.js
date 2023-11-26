import { COMMA, ERROR } from '../constants/messages.js';
import { MAX_CAR_LENGTH, MIN_CARS_LENGTH, MIN_TRIAL_NUMBER } from '../constants/numbers.js';

const Validator = {
  validateCarNames(carNames) {
    const cars = carNames.split(COMMA).map(name => name.trim());

    if (cars.length < MIN_CARS_LENGTH || cars.length !== [...new Set(cars)].length) {
      throw new Error(ERROR.not_valid_names);
    }

    cars.forEach(car => {
      if (car.length > MAX_CAR_LENGTH || !/^[가-힣a-zA-Z]+$/.test(car)) {
        throw new Error(ERROR.not_valid_names);
      }
    });
  },

  validateTrialNumber(trialNumber) {
    if (!Number(trialNumber)) {
      throw new Error(ERROR.not_a_valid_trial);
    }

    const trial = Number(trialNumber);
    if (!Number.isInteger(trial) || trial < MIN_TRIAL_NUMBER) {
      throw new Error(ERROR.not_a_valid_trial);
    }
  },
};

export default Validator;

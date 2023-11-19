import Validator from './validation/Validator.js';

class User {
  #user;

  constructor(numbers) {
    this.#user = Validator.validateNumbers(numbers);
    Validator.validateDuplication(this.#user);
  }

  getUser() {
    return this.#user;
  }
}

export default User;

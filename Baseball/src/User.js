class User {
  #user;

  constructor(numbers) {
    this.#user = numbers.split('').map(number => Number(number));
  }

  getUser() {
    return this.#user;
  }
}

export default User;

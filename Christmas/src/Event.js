import { WEEKDAYS_DATE, WEEKENDS_DATE, CHRISTMAS_DATE, SPECIAL_DATE, CHRISTMAS_DDAY_PRICE, START_DATE, ZERO, SPECIAL_PRICE, ADD_PRICE, WEEK_PRICE, MIN_FREE_PRICE, FREE_PRICE, ONE } from './constants/numbers.js';
import { CATEGORY } from './constants/menus.js';

class Event {
  #date;
  #order;

  constructor(date, order) {
    this.#date = date;
    this.#order = order;
  }

  calculateChristmasDday() {
    let christmasDday = CHRISTMAS_DDAY_PRICE;
    let date = START_DATE;

    while (date < this.#date) {
      christmasDday = christmasDday + ADD_PRICE;
      date = date + ONE;
    }
    
    return christmasDday;
  }

  calculateWeekdays() {
    let weekdays = ZERO;

    Object.keys(this.#order).forEach(menu => {
      if (CATEGORY.dessert.includes(menu)) {
        weekdays = weekdays + WEEK_PRICE;
      }
    });

    return weekdays;
  }

  calculateWeekends() {
    let weekends = ZERO;

    Object.keys(this.#order).forEach(menu => {
      if (CATEGORY.main.includes(menu)) {
        weekends = weekends + WEEK_PRICE;
      }
    });

    return weekends;
  }

  calculateSpecial() {
    return SPECIAL_PRICE;
  }

  calculateFree(totalOrder) {
    let free = ZERO;

    if (totalOrder >= MIN_FREE_PRICE) {
      free = FREE_PRICE;
    }

    return free;
  }

  calculateTotalDiscount() {
    let totalDiscount = ZERO;

    if (this.#date >= START_DATE && this.#date <= CHRISTMAS_DATE) {
      totalDiscount = totalDiscount + this.calculateChristmasDday();
    }
    if (WEEKENDS_DATE.includes(this.#date)) {
      totalDiscount = totalDiscount + this.calculateWeekdays();
    }
    if (WEEKDAYS_DATE.includes(this.#date)) {
      totalDiscount = totalDiscount + this.calculateWeekdays();
    }
    if (SPECIAL_DATE.includes(this.#date)) {
      totalDiscount = totalDiscount + this.calculateSpecial();
    }

    return totalDiscount;
  }
}

export default Event;

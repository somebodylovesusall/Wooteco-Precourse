import { BADGE, DEFAULT } from './constants/messages.js';
import { MIN_STAR_PRICE, MIN_SANTA_PRICE, MIN_TREE_PRICE } from './constants/numbers.js';

class Badge {
  #totalBenefit;

  constructor(totalBenefit) {
    this.#totalBenefit = totalBenefit;
  }

  awardBadge() {
    let badge = DEFAULT;

    if (this.#totalBenefit >= MIN_SANTA_PRICE) {
      badge = BADGE.santa;
    }

    if (this.#totalBenefit < MIN_SANTA_PRICE && this.#totalBenefit >= MIN_TREE_PRICE) {
      badge = BADGE.tree;
    }

    if (this.#totalBenefit < MIN_TREE_PRICE && this.#totalBenefit >= MIN_STAR_PRICE) {
      badge = BADGE.star;
    }

    return badge;
  }
}

export default Badge;

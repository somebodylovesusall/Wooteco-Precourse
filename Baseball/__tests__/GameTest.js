import Game from '../src/Game.js';

describe('게임 클래스 테스트', () => {
  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크, 볼의 개수를 계산한다.', () => {
    const game = new Game([1, 3, 5], [2, 4, 6]);
    expect(game.compareNumbers()).toEqual({ strike: 0, ball: 0 });
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크, 볼의 개수를 계산한다.', () => {
    const game = new Game([1, 2, 5], [2, 5, 6]);
    expect(game.compareNumbers()).toEqual({ strike: 0, ball: 2 });
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크, 볼의 개수를 계산한다.', () => {
    const game = new Game([1, 3, 5], [1, 3, 6]);
    expect(game.compareNumbers()).toEqual({ strike: 2, ball: 0 });
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크, 볼의 개수를 계산한다.', () => {
    const game = new Game([1, 3, 5], [3, 1, 5]);
    expect(game.compareNumbers()).toEqual({ strike: 1, ball: 2 });
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크, 볼의 개수를 계산한다.', () => {
    const game = new Game([1, 3, 5], [1, 3, 5]);
    expect(game.compareNumbers()).toEqual({ strike: 3, ball: 0 });
  });
});

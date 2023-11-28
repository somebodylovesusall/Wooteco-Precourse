import GameController from '../src/GameController.js';

describe('게임 컨트롤러 클래스 테스트', () => {
  let game;

  beforeEach(() => {
    game = new GameController();
    game.computer = [1, 2, 3];
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크가 있는 경우를 계산한다.', () => {
    const user = [1, 2, 3];
    const { strike, ball } = game.compareNumbers(user);

    expect(strike).toEqual(3);
    expect(ball).toEqual(0);
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 볼이 있는 경우를 계산한다.', () => {
    const user = [3, 1, 2];
    const { strike, ball } = game.compareNumbers(user);

    expect(strike).toEqual(0);
    expect(ball).toEqual(3);
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크와 볼이 있는 경우를 계산한다.', () => {
    const user = [1, 3, 5];
    const { strike, ball } = game.compareNumbers(user);

    expect(strike).toEqual(1);
    expect(ball).toEqual(1);
  });

  test('컴퓨터와 사용자의 숫자를 비교하여 스트라이크와 볼이 없는 경우를 계산한다.', () => {
    const user = [4, 5, 6];
    const { strike, ball } = game.compareNumbers(user);

    expect(strike).toEqual(0);
    expect(ball).toEqual(0);
  });
});

import Car from '../src/Car.js';

describe('자동차 클래스 테스트', () => {
  let car;
  beforeEach(() => {
    car = new Car(['pobi', 'woni', 'jun', 'lisa']);
  });

  test('자동차 객체를 0으로 초기화한다.', () =>{
    expect(car.getCars()).toEqual({pobi: 0, woni: 0, jun: 0, lisa: 0});
  });

  test('임의의 숫자가 4 이상 9 이하면 1을 반환한다.', () =>{
    const randomNumber = car.pickRandomNumber();
    const goOrStop = car.isGoOrStop(randomNumber);

    if (randomNumber >= 4 && randomNumber <= 9) {
      expect(goOrStop).toEqual(1);
    }
  });

  test('임의의 숫자가 0 이상 3 이하면 0을 반환한다.', () =>{
    const randomNumber = car.pickRandomNumber();
    const goOrStop = car.isGoOrStop(randomNumber);

    if (randomNumber <= 3 && randomNumber >= 0) {
      expect(goOrStop).toEqual(0);
    }
  });
});

import Winner from '../src/Winner.js';

describe('우승자 클래스 테스트', () => {
  let winner;
  beforeEach(() => {
    winner = new Winner({pobi: 3, woni: 2, jun: 5, lisa: 5});
  });

  test('자동차 경주 결과 value의 최댓값을 구한다.', () =>{
    const max = winner.countMax();
    expect(max).toEqual(5);
  });

  test('자동차 경주의 우승자를 보여 준다.', () =>{
    const winners = winner.showWinners(5);
    expect(winners).toEqual(['jun', 'lisa']);
  });
});

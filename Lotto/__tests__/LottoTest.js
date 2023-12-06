import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  let lotto;
  
  beforeEach(() => {
    lotto = new Lotto();
  });

  test('로또 수량만큼 로또를 발행한다.', () => {
    const lottos = lotto.makeLottos(8000);
    expect(lottos.length).toEqual(8);
  });
});

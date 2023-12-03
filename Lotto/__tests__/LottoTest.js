import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  let lotto;
  
  beforeEach(() => {
    lotto = new Lotto(8000);
  });

  test("로또 수량만큼 로또를 발행한다.", () => {
    const lottos = lotto.makeLottos();
    expect(lottos.length).toEqual(8);
  });
});

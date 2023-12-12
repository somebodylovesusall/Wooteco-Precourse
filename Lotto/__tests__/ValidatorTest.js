import Validator from '../src/validation/Validator.js';

describe('로또 구입 금액 유효성 검증 테스트', () => {
  test('로또 구입 금액이 숫자가 아니면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validatePrice('1000원');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1,000원 미만이면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validatePrice('0');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1,000원 단위로 나누어 떨어지지 않으면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validatePrice('1800');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 유효하면 예외를 발생하지 않는다.', () => {
    expect(() => {
      Validator.validatePrice('8000');
    }).not.toThrow('[ERROR]');
  });
});

describe('당첨 번호 유효성 검증 테스트', () => {
  test('당첨 번호가 6개가 아니면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validateWinning('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 중복되면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validateWinning('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test.each(['원,2,3,4,5,6', '1.5,2,3,4,5,6', '0,1,2,3,4,5', '42,43,44,45,46'])('당첨 번호가 1부터 45까지의 자연수가 아니면 예외를 발생한다.', winning => {
    expect(() => {
      Validator.validateWinning(winning);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 유효하면 예외를 발생하지 않는다.', () => {
    expect(() => {
      Validator.validateWinning('1,2,3,4,5,6');
    }).not.toThrow('[ERROR]');
  });
});

describe('보너스 번호 유효성 검증 테스트', () => {
  test.each(['45번', '45.5', '0', '46'])('보너스 번호가 1부터 45까지의 자연수가 아니면 예외를 발생한다.', bonus => {
    expect(() => {
      Validator.validateBonus([1,2,3,4,5,6], bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validateBonus([1,2,3,4,5,6], '1');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 유효하면 예외를 발생하지 않는다.', () => {
    expect(() => {
      Validator.validateBonus([1,2,3,4,5,6], '45');
    }).not.toThrow('[ERROR]');
  });
});

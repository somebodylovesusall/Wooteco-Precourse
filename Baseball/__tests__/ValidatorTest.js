import Validator from '../src/validation/Validator.js';

describe('유효성 검증 테스트', () => {
  test.each(['1234', '1.5', '1-5', '903'])('사용자가 세 자리 자연수를 입력하지 않으면 예외가 발생한다.', notThreeDigitNumber => {
    expect(() => {
      Validator.validateThreeDigitNumber(notThreeDigitNumber);
    }).toThrow('[ERROR]');
  });

  test('사용자가 중복된 세 자리 자연수를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateThreeDigitNumber('133');
    }).toThrow('[ERROR]');
  });

  test('사용자가 중복되지 않은 세 자리 자연수를 입력하면 예외가 발생하지 않는다.', () => {
    expect(() => {
      Validator.validateThreeDigitNumber('123');
    }).not.toThrow();
  });

  test('사용자가 1 또는 2를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateRestartOrExit('3');
    }).toThrow('[ERROR]');
  });

  test.each(['1', '2'])('사용자가 1 또는 2를 입력하면 예외가 발생하지 않는다.', restartOrExit => {
    expect(() => {
      Validator.validateRestartOrExit(restartOrExit);
    }).not.toThrow();
  });
});

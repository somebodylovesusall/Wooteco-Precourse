import Validator from '../src/validation/Validator.js';

describe('자동차명 유효성 검증 테스트', () => {
  test('자동차 대수가 두 대 미만이면 예외를 발생한다.', () =>{
    expect(() => {
      Validator.validateCarNames('pobi');
    }).toThrow('[ERROR]');
  });

  test('자동차명이 중복되면 예외를 발생한다.', () =>{
    expect(() => {
      Validator.validateCarNames('pobi,pobi,woni');
    }).toThrow('[ERROR]');
  });

  test('자동차명이 다섯 자를 초과하면 예외를 발생한다.', () =>{
    expect(() => {
      Validator.validateCarNames('pobiiiiii,woni,jun');
    }).toThrow('[ERROR]');
  });

  test('자동차명에 한글 또는 영문 이외의 문자를 포함하면 예외를 발생한다.', () =>{
    expect(() => {
      Validator.validateCarNames('pobi1,woni-,jun3');
    }).toThrow('[ERROR]');
  });

  test('자동차명이 유효하면 예외를 발생하지 않는다.', () =>{
    expect(() => {
      Validator.validateCarNames('pobi,woni,jun,lisa');
    }).not.toThrow('[ERROR]');
  });
});

describe('시도 횟수 유효성 검증 테스트', () => {
  test.each(['2.5', '0', '-1'])('시도 횟수가 자연수가 아니면 예외를 발생한다.', trial => {
    expect(() => {
      Validator.validateTrialNumber(trial);
    }).toThrow('[ERROR]');
  });

  test('시도 횟수가 자연수면 예외를 발생하지 않는다.', () =>{
    expect(() => {
      Validator.validateTrialNumber('5');
    }).not.toThrow('[ERROR]');
  });
});

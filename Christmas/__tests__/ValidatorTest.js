import Validator from '../src/validation/Validator.js';

describe('식당 예상 방문 날짜 유효성 검증 테스트', () => {
  test.each(['1일', '1.5', '0', '32'])('식당 예상 방문 날짜가 1부터 31까지의 자연수가 아니면 예외를 발생한다.', date => {
    expect(() => {
      Validator.validateDate(date);
    }).toThrow('[ERROR]');
  });

  test('식당 예상 방문 날짜가 유효하면 예외를 발생하지 않는다.', () => {
    expect(() => {
      Validator.validateDate('3');
    }).not.toThrow('[ERROR]');
  });
});

describe('주문 메뉴 및 수량 유효성 검증 테스트', () => {
  test.each([[['해산물파스타-a']], [['아이스크림1']], [['해산물파스타-1', '아이스크림1']]])('주문 메뉴의 형식이 유효하지 않으면 예외를 발생한다.', orders => {
    expect(() => {
      Validator.validateOrder(orders);
    }).toThrow('[ERROR]');
  });

  test('중복된 메뉴를 포함하면 예외를 발생한다.', () => {
    const order = ['해산물파스타-1', '아이스크림-1', '해산물파스타-2'];
    const validatedOrder = {'해산물파스타': 2, '아이스크림': 1};

    expect(() => {
      Validator.validateMenu(order, validatedOrder);
    }).toThrow('[ERROR]');
  });

  test('없는 메뉴를 포함하면 예외를 발생한다.', () => {
    const order = ['알리오올리오파스타-1', '아이스크림-1'];
    const validatedOrder = {'알리오올리오파스타': 1, '아이스크림': 1};

    expect(() => {
      Validator.validateMenu(order, validatedOrder);
    }).toThrow('[ERROR]');
  });

  test('음료만 단독으로 주문하면 예외를 발생한다.', () => {
    const order = ['제로콜라-1'];
    const validatedOrder = {'제로콜라': 1};

    expect(() => {
      Validator.validateMenu(order, validatedOrder);
    }).toThrow('[ERROR]');
  });

  test('주문 수량이 자연수가 아니면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validateQuantity({'해산물파스타': 0, '아이스크림': 1});
    }).toThrow('[ERROR]');
  });

  test('총 주문 수량이 20개를 초과하면 예외를 발생한다.', () => {
    expect(() => {
      Validator.validateQuantity({'해산물파스타': 1, '아이스크림': 20});
    }).toThrow('[ERROR]');
  });

  test('주문 메뉴와 수량이 유효하면 예외를 발생하지 않는다.', () => {
    expect(() => {
      const order = ['해산물파스타-2', '아이스크림-3', '제로콜라-1'];
      const validatedOrder = Validator.validateOrder(order);
      Validator.validateMenu(order, validatedOrder);
      Validator.validateQuantity(validatedOrder);
    }).not.toThrow('[ERROR]');
  });
});

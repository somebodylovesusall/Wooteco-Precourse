const NEWLINE = '\n';
const COMMA = ',';
const HYPHEN = '-';
const MINUS = '-';
const DEFAULT = '없음';
const WON = '원';
const QUANTITY = '개';
const KO_KR = 'ko-KR';

const INPUT = Object.freeze({
  date: `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)${NEWLINE}`,
  order: `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)${NEWLINE}`,
});

const ERROR = Object.freeze({
  not_a_valid_date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  not_a_valid_order: '[ERROR} 유효하지 않은 주문입니다. 다시 입력해 주세요.',
});

const BENEFIT = Object.freeze({
  christmasDday: '크리스마스 디데이 할인: ',
  weekdays: '평일 할인: ',
  weekends: '주말 할인: ',
  special: '특별 할인: ',
  free: '증정 이벤트: ',
});

const BADGE = Object.freeze({
  star: '별',
  tree: '트리',
  santa: '산타',
});

const OUTPUT = Object.freeze({
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  preview: date => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!${NEWLINE}`,
  order: '<주문 메뉴>',
  total_order: totalOrder => `<할인 전 총주문 금액>${NEWLINE}${totalOrder.toLocaleString(KO_KR)}${WON}${NEWLINE}`,
  free: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  total_benefit: '<총혜택 금액>',
  total_pay: totalPay => `<할인 후 예상 결제 금액>${NEWLINE}${totalPay.toLocaleString(KO_KR)}${WON}${NEWLINE}`,
  badge: badge => `<12월 이벤트 배지>${NEWLINE}${badge}`
});

export { NEWLINE, COMMA, HYPHEN, MINUS, DEFAULT, QUANTITY, WON, KO_KR, INPUT, ERROR, OUTPUT, BADGE, BENEFIT };

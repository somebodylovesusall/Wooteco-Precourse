const INPUT = Object.freeze({
  price: '구입금액을 입력해 주세요.',
  winning: '당첨 번호를 입력해 주세요.',
  bonus: '보너스 번호를 입력해 주세요.',
});

const ERROR = Object.freeze({
  not_a_valid_price: '[ERROR] 유효하지 않은 구입 금액입니다. 다시 입력해 주세요.',
  not_a_valid_winning: '[ERROR] 유효하지 않은 당첨 번호입니다. 다시 입력해 주세요.',
  not_a_valid_bonus: '[ERROR] 유효하지 않은 보너스 번호입니다. 다시 입력해 주세요.',
});

const OUTPUT = {
  three_match: '3개 일치 (5,000원) - ',
  four_match: '4개 일치 (50,000원) - ',
  five_match: '5개 일치 (1,500,000원) - ',
  five_plus_bonus_match: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  six_match: '6개 일치 (2,000,000,000원) - ',
};

const NEWLINE = '\n';
const COMMA = ',';
const LOTTOS = '개를 구매했습니다.';
const COUNT = '개';
const STATISTICS = `당첨 통계${NEWLINE}---${NEWLINE}`;
const TOTAL_PROFIT = '총 수익률은 ';
const PERCENT = '%입니다.';

export { INPUT, ERROR, OUTPUT, LOTTOS, COUNT, STATISTICS, NEWLINE, TOTAL_PROFIT, PERCENT, COMMA };

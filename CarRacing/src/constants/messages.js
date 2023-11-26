const INPUT = Object.freeze({
  car_names: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  trial_number: '시도할 횟수는 몇 회인가요?',
});

const ERROR = Object.freeze({
  not_a_valid_names: '[ERROR] 유효하지 않은 자동차 이름입니다. 다시 입력해 주세요.',
  not_a_valid_number: '[ERROR] 유효하지 않은 시도 횟수입니다. 다시 입력해 주세요.',
});

const OUTPUT = Object.freeze({
  game_result: '실행 결과',
  final_winners: '최종 우승자',
});

const HYPHEN = '-';
const COMMA = ',';
const COLON = ' : ';
const LINE_BREAK = '\n';

export { INPUT, ERROR, OUTPUT, HYPHEN, COMMA, COLON, LINE_BREAK };

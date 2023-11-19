const INPUT = Object.freeze({
  number: '숫자를 입력해주세요 : ',
});

const ERROR = Object.freeze({
  not_a_valid_number: '유효하지 않은 숫자입니다. 숫자를 다시 입력해 주세요.',
});

const OUTPUT = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  over: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart_or_exit: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const BALL = '볼';
const STRIKE = '스트라이크';
const DEFAULT = '낫싱';
const LINE_BREAK = '\n';

export {INPUT, ERROR, OUTPUT, BALL, STRIKE, DEFAULT, LINE_BREAK };

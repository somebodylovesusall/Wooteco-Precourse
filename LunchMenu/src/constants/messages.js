const NEWLINE = '\n';
const COMMA = ',';
const PIPE = '|';

const INPUT = Object.freeze({
  coaches: '코치의 이름을 입력해 주세요. (, 로 구분)',
  menus_excluded: '(이)가 못 먹는 메뉴를 입력해 주세요.',
});

const ERROR = Object.freeze({
  not_valid_coaches: '[ERROR] 유효하지 않은 코치입니다. 다시 입력해 주세요.',
  not_valid_menus: '[ERROR] 유효하지 않은 메뉴입니다. 다시 입력해 주세요.',
});

const OUTPUT = Object.freeze({
  recommendation_start: '점심 메뉴 추천을 시작합니다.',
  recommendation_result: '메뉴 추천 결과입니다.',
  recommendation_days: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  recommendation_categories: (categories) => `[ 카테고리 | ${categories[0]} | ${categories[1]} | ${categories[2]} | ${categories[3]} | ${categories[4]}]`,
  recommendation_menus: (coach, menus) => `[ ${coach} | ${menus[0]} | ${menus[1]} | ${menus[2]} | ${menus[3]} | ${menus[4]} ]`,
  recommendation_end: '추천을 완료했습니다.',
});

exports.NEWLINE = NEWLINE;
exports.COMMA = COMMA;
exports.PIPE = PIPE;
exports.INPUT = INPUT;
exports.ERROR = ERROR;
exports.OUTPUT = OUTPUT;

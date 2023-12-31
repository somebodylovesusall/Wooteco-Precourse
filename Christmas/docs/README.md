# Christmas Promotion

고객에게 중복된 할인 및 증정 혜택을 제공하는 이벤트 플래너를 구현한다.

## 💁‍♀️ 플래너

- [x] 12월 식당 예상 방문 날짜를 생성한다.
- [x] 주문 메뉴와 수량을 생성한다.
- [x] 할인 전 총 주문 금액을 계산한다.
- [x] 이벤트를 생성한다.
  - [x] 할인 전 총 주문 금액이 10,000원 이상이면 이벤트를 적용한다.
- [x] 혜택 내역을 산출한다.
- [x] 총 혜택 금액(총 할인 금액 + 증정 메뉴 가격)을 계산한다.
- [x] 할인 후 예상 결제 금액(할인 전 총 주문 금액 - 총 할인 금액)을 계산한다.
- [x] 배지를 생성한다.
- [x] 이벤트 적용 결과를 생성한다.

## 🗓️ 이벤트

- [x] 날짜와 주문을 전달받는다.
- [x] 크리스마스 디데이 할인 이벤트를 계산한다. (이벤트 기간: 12/1 ~ 12/25)
  - [x] 1일부터 식당 예상 방문 날짜까지 1,000원으로 시작하여 날마다 100원씩 더한 금액만큼 총 주문 금액에서 할인한다.
- [x] 요일 할인 이벤트를 계산한다. (이벤트 기간: 12/1 ~ 12/31)
  - [x] 평일(일, 월, 화, 수, 목)이면 디저트 메뉴를 개당 2,023원 할인한다.
  - [x] 주말(금, 토)에는 메인 메뉴를 개당 2,023원 할인한다.
- [x] 특별 할인 이벤트를 계산한다. (이벤트 기간: 12/1 ~ 12/31)
  - [x] 달력에 `🌟`이 있으면 총 주문 금액에서 1,000원을 할인한다.
- [x] 증정 이벤트를 계산한다. (이벤트 기간: 12/1 ~ 12/31)
  - [x] 할인 전 총 주문 금액이 120,000원 이상이면 샴페인 1개를 증정한다.
- [x] 할인 금액을 0원으로 초기화한다.
- [x] 할인 이벤트에 따른 총 할인 금액을 계산한다.

## 🏆 배지

- [x] 총 혜택 금액을 전달받는다.
- [x] 총 혜택 금액에 따른 배지를 부여한다.
  - [x] 총 혜택 금액이 5,000원 이상이면 `별`을 부여한다.
  - [x] 총 혜택 금액이 10,000원 이상이면 `트리`를 부여한다.
  - [x] 총 혜택 금액이 20,000원 이상이면 `산타`를 부여한다.

## ⬇️ 입력

`Console.readLineAsync()`를 활용하여 입력한다.

- [x] 사용자는 12월 식당 예상 방문 날짜를 숫자로 입력한다.
  - [x] 사용자가 입력한 날짜를 검증하는 함수를 호출한다.
- [x] 사용자는 주문 메뉴와 수량을 하이픈과 쉼표로 구분하여 입력한다.
  - [x] 사용자가 입력한 주문을 검증하는 함수를 호출한다.

## ⬆️ 출력

`Console.print()`를 활용하여 출력한다.

- [x] 이벤트 플래너 인사 문구를 출력한다.
- [x] 12월 식당 예상 방문 날짜에 따른 이벤트 혜택 미리 보기 결과를 출력한다.
  - [x] 주문 메뉴를 출력한다.
  - [x] 할인 전 총 주문 금액을 출력한다.
  - [x] 증정 메뉴를 출력한다. (기본 값: `없음`)
  - [x] 혜택 내역을 출력한다. (기본 값: `없음`)
  - [x] 총 혜택 금액을 출력한다. (기본 값: `0원`)
  - [x] 할인 후 예상 결제 금액을 출력한다.
  - [x] 이벤트 배지를 출력한다. (기본 값: `없음`)

## 🐛 유효성 검증

사용자가 잘못된 값을 입력한 경우 `throw` 문으로 예외를 발생하고 `[ERROR]`로 시작하는 에러 메시지를 출력한 후 다시 입력받는다.

- [x] 식당 예상 방문 날짜를 검증한다.
  - [x] 식당 방문 날짜가 1부터 31까지의 자연수가 아니면 예외를 발생한다.
- [x] 주문 메뉴를 검증한다.
  - [x] 주문 메뉴의 형식이 유효하지 않으면 예외를 발생한다.
  - [x] 중복된 메뉴를 포함하면 예외를 발생한다.
  - [x] 없는 메뉴를 포함하면 예외를 발생한다.
  - [x] 음료만 단독으로 주문하면 예외를 발생한다.
- [x] 주문 수량을 검증한다.
  - [x] 주문 수량이 자연수가 아니면 예외를 발생한다.
  - [x] 총 주문 수량이 20개를 초과하면 예외를 발생한다.

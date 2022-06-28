/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 함수 선언 → 화살표 함수 식
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(7));

// 일반 함수 식 → 화살표 함수 식
const numberWithComma = (n) =>
  n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

console.log(numberWithComma(9800));

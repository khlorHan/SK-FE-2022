/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 나머지 매개변수 (집합) -------------------------------------------------------- */

const multiplyCount = (first, ...rest) => {
  return rest.reduce((prev, current, index) => {
    if (index === 0) {
      prev += current;
    } else {
      prev *= current;
    }
    return prev;
  }, first);
};

console.log(multiplyCount(10, 11, 12, 14));

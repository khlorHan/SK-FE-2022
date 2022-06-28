/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 배열 전개 ------------------------------------------------------------------- */

const integers = [-1, 0, 32, -101, 24];
// Function.prototype.call(thisArg, arg1, arg2)
// Function.prototype.apply(thisArg, [arg1, arg2])
// 메서드 빌려쓰기 패턴
// let maxInt = Math.max.apply(Math, [302, 1, 2, 30, -101].concat(integers));

let maxInt = Math.max(...[316, 1, 2, 30, -101, ...integers]);

// console.log(maxInt);

/* 객체 전개 ------------------------------------------------------------------- */

// 상태 업데이트 유틸리티 함수
const setState = (newState) => {
  // return
  return {
    ...state,
    // loading: false,
    // error: null,
    // data: [{ id: 101, title: '초기 데이터' }],
    ...newState,
    // loading: true,
    // data: [{ id: 201, title: '데이터 업데이트' }],
    data: [...state.data, ...newState.data],
  };
};

// 상태 객체 (불변 데이터 화)
// React = 선언형 프로그래밍 패러다임
// 불변(immutable) 데이터 관리
// FLUX (예측 가능, 단방향 흐름)
const state = Object.freeze({
  loading: false,
  error: null,
  data: [{ id: 101, title: '초기 데이터' }],
});

console.log('업데이트 전', state);

console.log(
  '업데이트 후',
  setState({
    loading: true,
    data: [{ id: 201, title: '데이터 업데이트' }],
  })
);

// Node.js Modules
// CommonJS 진영의 모듈 로드 방식 (cjs)

const sum = (...numbers) => {
  return numbers.reduce((prev, cur) => prev + cur, 0);
};

module.exports = {
  sum,
};

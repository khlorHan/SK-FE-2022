/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const node = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styleRules, element) => {
  // 코드를 작성합니다.

  let styleCode = styleRules.reduce(
    (prevValue, currentValue) => (prevValue + currentValue).trim(),
    ''
  );

  element.style.cssText = styleCode;
};

// styled()
// styled`
// 	${document.body}
// 	margin: 10px;
// 	background: salmon;
// `;

// 일반 함수 식 (ES5, 2009-2014)
// const $styled = function (element) {
//   return function (styleRules) {
//     let styleCode = styleRules.reduce(
//       (prevValue, currentValue) => (prevValue + currentValue).trim(),
//       ''
//     );
//     element.style.cssText = styleCode;
//   };
// };

// 화살표 함수 식 (2015 ~)
const $styled = (element) => (styleRules) => {
  let styleCode = styleRules.reduce(
    (prevValue, currentValue) => (prevValue + currentValue).trim(),
    ''
  );

  // Side Effects
  // Imperative Programming
  element.style.cssText = styleCode;
  // return undefined;
};

$styled(document.body)`
  margin: 10px;
  background: salmon;
`;

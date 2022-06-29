/* eslint-disable no-unused-vars */

import { createElement as h, Fragment } from 'react';
import { EmojiOops, PrettyPrintCode } from 'components';
// import db from 'api/db.json';

/* -------------------------------------------------------------------------- */

let error = null;

// 조건부 렌더링(rendering) vs. 조건부 표시(display)
// Vue : v-if vs. v-show

// 오류 메시지를 포함한 객체를 추가해보세요.
error = {
  message: '네트워크 통신 오류가 발생했습니다.',
  log() {
    console.log(`🚨 ${this.message}`);
  },
  isThis: () => console.log(this),
  isThat() {
    console.log(this);
  },
};

let isDisplayParagraph = !true;

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  // if 문 → 논리 연산자 식 → null 병합 연산자 식
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

  // 논리 연산자 식 → 옵셔널 체이닝 식
  error?.log?.();
  error?.isThis?.();
  error?.isThat?.();

  // JSX 조건부 렌더링: if 문
  // 오류가 존재하면 렌더링 되도록 코드를 작성합니다.

  // if (error) {
  //   const displayErrorState = (
  //     <div className="container">
  //       <h1 className="headline">
  //         <EmojiOops height={200} />
  //         {error.message}
  //       </h1>
  //     </div>
  //   );

  //   return displayErrorState;
  // }

  return (
    <div className="container">
      <h1 className="headline">
        {/* h('h1', { children: [h(EmojiOops), 'error message'] }) */}
        {!error ? (
          'React 조건부 렌더링'
        ) : (
          // : [<EmojiOops key="oops" height={200} />, error.message]}
          <>
            <EmojiOops height={200} />
            {error.message}
          </>
        )}
      </h1>
      {/* 조건부 렌더링 예 */}
      {/* 3항 연산자 식을 사용한 조건 처리 */}
      {/* {!error ? <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p> : null} */}

      {/* 논리 연산자 식을 사용한 조건 처리 */}
      {!!error || <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>}

      {/* 조건부 표시 예 */}
      {/* <p hidden={!isDisplayParagraph}> */}
      {/* <p style={{ display: isDisplayParagraph ? 'initial' : 'none' }}>
        오류가 존재하면 렌더링 되도록 코드를 작성합니다.
      </p> */}
    </div>
  );
};

/* -------------------------------------------------------------------------- */

// CRA - ES Modules or CommonJS Modules
const db = require('api/db.json');

const { items } = db.navigation;

// function
const renderList = (list /* parameters */) =>
  list.map(({ link, text }) => (
    <li key={link}>
      <a href={link}>{text}</a>
    </li>
  ));

// functional component
const RenderList = ({ list } /* props */) =>
  list.map(({ link, text }) => (
    <li key={link}>
      <a href={link}>{text}</a>
    </li>
  ));

// `api/db.json` 데이터에서 `navigation.items` 데이터를 화면에 출력해보세요.
// `list` 매개 변수를 순환해 아이템 리스트를 반환하는 `renderList` 함수를 만들어 활용해봅니다.

const ListRendering = () => {
  return (
    <div className="container">
      <h1 className="headline">React 리스트 렌더링 (배열)</h1>

      {/* 배열 리스트 렌더링 */}
      <nav className="globalNavigation">
        {/* 웹 표준을 준수해 비순차 목록(ul, unordered list)을 화면에 출력해봅니다. */}
        {/* renderList(list) 함수를 실행해 리스트 렌더링 처리해봅니다. */}
        <ul>
          {/* <li>리스트를 렌더링 해보세요.</li> */}
          <RenderList list={items} />
          {/* {renderList(items)} */}
          {/* {items.map(({ link, text }) => (
            <li key={link}>
              <a href={link}>{text}</a>
            </li>
          ))} */}
        </ul>
      </nav>

      {/* 객체 리스트 렌더링 */}
      <dl className="descriptionList">
        {Object.entries(db).map(([key, value]) => {
          return (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>
                {typeof value === 'string' ? (
                  value
                ) : (
                  <PrettyPrintCode code={value} />
                )}
              </dd>
            </Fragment>
          );
        })}
        {/* 웹 표준을 준수해 설명 목록(dl, definition list > dt, dd)을 화면에 출력해봅니다. */}
        {/* `db` 객체의 "속성", "값" 쌍을 순환하여 리스트 렌더링 해보세요. */}
        {/* 값의 유형이 객체 또는 배열인 경우, 코드가 화면에 출력되도록 설정합니다. */}
        {/* `isArray`, `isObject` 유틸리티 함수를 만들어 활용하세요. */}
        {/* 코드를 화면에 출력할 때는 <PrettyPrintCode /> 컴포넌트를 활용합니다. (`code` 속성) */}
        {/* <PrettyPrintCode code={db} /> */}
      </dl>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

export { ConditionalRendering, ListRendering };

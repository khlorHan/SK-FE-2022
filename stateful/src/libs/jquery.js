/**
 * 참고
 * https://gijsroge.github.io/tilt.js
 * https://github.com/mycreatesite/TextyleFLIP.js
 */

/* 플러그인 모듈 로드 --------------------------------------------------------------- */

import './textyleF';
import tilt from 'tilt.js';

/* 플러그인 함수 실행 (필요한 경우) ---------------------------------------------------- */

let $ = tilt();

/* 사용자 정의 플러그인 설정 ---------------------------------------------------------- */

$.fn.showLinkPath = function () {
  this.filter('a').append((i) => ` (${this[i].getAttribute('href')})`);
  return this;
};

/* jQuery 내보내기 ---------------------------------------------------------------- */

export default $;

/* eslint-disable no-unused-vars */

import './TiltCard.css';
import $ from '@/libs/jquery';
import { useRef, useEffect } from 'react';
import classNames from 'classnames';

export function TiltCard({
  className,
  textFlip,
  showLinkPath,
  tiltOff,
  children,
  ...restProps
}) {
  const tiltCardRef = useRef(null); // { current: null }
  const $tiltRef = useRef(null); // { current: null }

  useEffect(() => {
    const { current: element } = tiltCardRef;

    const $element = $(element);

    /* jQuery textyleF ---------------------------------------- */

    if (textFlip) {
      $element.find('p').textyleF({
        duration: 600,
        delay: 100,
        easing: 'cubic-bezier(.18,1.37,.93,.34)',
        callback() {
          $(this).css({
            color: '#ffc4bd',
            transition: '0.6s',
          });
        },
      });
    }

    /* jQuery showLinkPath ------------------------------------ */

    if (showLinkPath) {
      const $links = $element.find('a');
      if ($links.length) {
        $links.showLinkPath();
      }
    }

    /* jQuery Tilt Init. */
    if (!tiltOff) {
      // mutation (수정)
      // 리 렌더링?? NO
      $tiltRef.current = $element.tilt();
    }

    /* CLEANUP */
    return () => {
      /* jQuery Tilt Destory */
      if (!tiltOff) {
        $tiltRef.current.tilt.destroy.call($tiltRef.current);
      }
    };
  }, [showLinkPath, textFlip, tiltCardRef, tiltOff]);

  // 변경되어도 컴포넌트 렌더링에 영향을 주지 않는 값을 참조 예
  // 비교: class 컴포넌트의 인스턴스 멤버와 같음
  const messageRef = useRef('hello React '); // { current: 'hello React' }

  return (
    <div
      ref={tiltCardRef}
      className={classNames(
        'tiltCard',
        { textyleF: textFlip },
        { showLinkPath },
        { tiltOff },
        className
      )}
      {...restProps}
    >
      {children}
      <button
        type="button"
        onClick={() => {
          messageRef.current += '😉';
        }}
      >
        click
      </button>
    </div>
  );
}

TiltCard.defaultProps = {
  tiltOff: false,
  textFlip: false,
  showLinkPath: false,
};

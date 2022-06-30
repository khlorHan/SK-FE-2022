// import VanillaTilt from 'vanilla-tilt';
import $ from '@/libs/jquery';

import './TiltCard.css';
import { Component, createRef } from 'react';
import classNames from 'classnames';

export class TiltCard extends Component {
  static defaultProps = {
    tiltOff: false,
    textFlip: false,
    showLinkPath: false,
  };

  #tiltCardRef = createRef(null);

  render() {
    const { className, textFlip, showLinkPath, ...restProps } = this.props;
    return (
      <div
        ref={this.#tiltCardRef}
        className={classNames(
          'tiltCard',
          { textyleF: textFlip },
          { showLinkPath },
          className
        )}
        {...restProps}
      />
    );
  }

  componentDidMount() {
    const { current: element } = this.#tiltCardRef;

    const $element = $(element);

    /* jQuery Tilt */
    if (!this.props.tiltOff) {
      this.$tilt = $element.tilt();
    }

    /* VanillaTilt */
    // VanillaTilt.init(element, {
    //   glare: true,
    //   'max-glare': 0.5,
    // });

    /* jQuery textyleF ---------------------------------------- */

    if (this.props.textFlip) {
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

    if (this.props.showLinkPath) {
      const $links = $element.find('a');
      if ($links.length) {
        $links.showLinkPath();
      }
    }
  }

  componentWillUnmount() {
    /* jQuery Tilt */
    if (!this.props.tiltOff) {
      const { $tilt } = this;
      $tilt.tilt.destroy.call($tilt);
    }

    /* VanillaTilt */
    // const { current: element } = this.#tiltCardRef;
    // element.vanillaTilt.destroy();
  }
}

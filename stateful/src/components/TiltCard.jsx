// import * as $ from 'jquery';
import VanillaTilt from 'vanilla-tilt';
import { Component, createRef } from 'react';
import classNames from 'classnames';

export class TiltCard extends Component {
  #element = null;

  #tiltCardRef = createRef(null);

  render() {
    const { className, ...restProps } = this.props;
    return (
      <div
        // callback ref
        // ref={(element) => {
        //   this.#element = element;
        // }}

        // createRef
        ref={this.#tiltCardRef}
        style={{
          width: 400,
          height: 220,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 30,
          padding: 20,
          color: '#fff',
          background: 'linear-gradient(to right bottom, #810000, #6a4300)',
        }}
        className={classNames('tiltCard', className)}
        {...restProps}
      />
    );
  }

  componentDidMount() {
    const { current: element } = this.#tiltCardRef;

    VanillaTilt.init(element, {
      glare: true,
      'max-glare': 0.5,
    });
  }

  componentWillUnmount() {
    const { current: element } = this.#tiltCardRef;
    element.vanillaTilt.destroy();
  }
}

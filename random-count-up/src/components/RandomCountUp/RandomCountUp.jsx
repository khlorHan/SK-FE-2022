/* eslint-disable no-unused-vars */
import './RandomCountUp.css';
import { Component } from 'react';
import { getRandomMinMax } from '@/utils';

class RandomCountUp extends Component {
  /* -------------------------------------------------------------------------- */
  // mount

  // static public field
  static defaultProps = {
    min: 30,
    max: 100,
    step: 1,
    current: 0,
    fps: 60,
  };

  // public instance field
  state = {
    name: 'Random Count Up',
    count: this.props.current,
    TARGET_COUNT: getRandomMinMax(this.props.min, this.props.max),
  };

  // 컴포넌트가 최초 실제 DOM에 마운트 된 이후에 1회 실행
  componentDidMount() {
    // 명령형 프로그래밍
    document.title = `(${this.state.TARGET_COUNT}) Random Count Up`;
    this.countUp();
  }

  render() {
    return (
      <div className="randomCountUp">
        <output style={{ animationName: 'none' }}>{this.state.count}</output>
      </div>
    );
  }

  componentDidUpdate(nextProps, nextState) {
    const { count, TARGET_COUNT } = this.state;

    if (count >= TARGET_COUNT) {
      this.cleanUp();
    }
  }

  componentWillUnmount() {
    this.cleanUp();
  }

  /* -------------------------------------------------------------------------- */

  #clearId = 0;

  countUp() {
    this.#clearId = setInterval(() => {
      this.setState(
        {
          count: this.state.count + this.props.step,
        }
        // () => {
        //   const { count, TARGET_COUNT } = this.state;
        //   if (count >= TARGET_COUNT) {
        //     this.cleanUp();
        //   }
        // }
      );
    }, 1000 / this.props.fps);
  }

  cleanUp() {
    clearInterval(this.#clearId);
  }
}

export default RandomCountUp;

/* eslint-disable no-unused-vars */
import './RandomCountUp.css';
import { Component } from 'react';
import { getRandomMinMax } from '@/utils';

// class 컴포넌트를 사용하는 이유 (~ 2019)
// - state (컴포넌트가 소유하는 상태, 외부 공개 안됨)
// - life cycles (클래스 컴포넌트만 사용 가능, 사이드 이펙트 처리 등)
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
    // clearInterval(this.#clearId);
  }

  /* -------------------------------------------------------------------------- */
  // mount + update

  static getDerivedStateFromProps({ min, max }) {
    // 반환되는 값과 컴포넌트 상태가 합성
    // 파생 상태 반환 (컴포넌트 상태로 합성)
    // return {
    //   TARGET_COUNT: getRandomMinMax(min, max),
    // };
  }

  shouldComponentUpdate(nextProps, { count }) {
    // if (count >= this.state.TARGET_COUNT) {
    //   return false;
    // } else {
    //   return true;
    // }
    // 성능 최적화를 목적으로만 사용!!
    // return true; // rendering O
    // return false; // rendering X
  }

  render() {
    return (
      <div className="randomCountUp">
        <output>{this.state.count}</output>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  // update

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.state.chatMessage.length > prevState.chatMessage.length) {
      // 스냅샷 반환
      return this.container.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    // ...
    if (snapshot) {
      this.container.scrollTop = snapshot;
    }
  }

  /* -------------------------------------------------------------------------- */
  // unmount

  componentWillUnmount() {
    // 해제 이전 시점에 수행
    this.cleanUp();
  }

  /* -------------------------------------------------------------------------- */

  #clearId = 0;

  countUp() {
    this.#clearId = setInterval(() => {
      this.setState({
        count: this.state.count + this.props.step,
      });
    }, 1000 / this.props.fps);
  }

  cleanUp() {
    clearInterval(this.#clearId);
  }
}

export default RandomCountUp;

import './RandomCountUp.css';
import { Component } from 'react';

// class 컴포넌트를 사용하는 이유 (~ 2019)
// - state (컴포넌트가 소유하는 상태, 외부 공개 안됨)
// - life cycles (클래스 컴포넌트만 사용 가능, 사이드 이펙트 처리 등)
class RandomCountUp extends Component {
  // static public field
  static defaultProps = {
    min: 30,
    max: 100,
    step: 1,
    current: 0,
  };

  // public instance field
  state = {
    name: 'Random Count Up',
    count: this.props.current,
  };

  render() {
    return (
      <div className="randomCountUp">
        <output>{this.state.count}</output>
      </div>
    );
  }

  componentDidMount() {
    // side effects
    // 선언형이 아닌, 명령형 프로그래밍
    setTimeout(() => {
      // console.log('카운트 업');

      // 컴포넌트의 상태 불변(immutable)
      // setState() API

      this.setState(
        {
          count: this.state.count + this.props.step,
        },
        () => {
          // 상태가 업데이트 되었음을 보장 (콜백)
          console.log('updated state', this.state.count);
        }
      );

      // console.log('after setState() : ', this.state.count);

      // this.setState(({ count }, { step }) => ({
      //   count: count + step,
      // }));
    }, 1000);
  }
}

export default RandomCountUp;

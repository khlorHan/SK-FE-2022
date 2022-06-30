import './RandomCountUp.css';
import { Component } from 'react';
import { getRandomMinMax } from '@/utils';

// stateful component
class RandomCountUp extends Component {
  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    current: 0,
    fps: 60,
  };

  state = {
    name: 'Random Count Up',
    count: this.props.current,
    TARGET_COUNT: getRandomMinMax(this.props.min, this.props.max),
  };

  static getDerivedStateFromProps(props, { count, TARGET_COUNT }) {
    return {
      isComplete: count >= TARGET_COUNT,
    };
  }

  render() {
    const { count, isComplete } = this.state;

    return (
      <div className="randomCountUp">
        <output style={isComplete ? { animationName: 'none' } : null}>
          {count}
        </output>
      </div>
    );
  }

  componentDidMount() {
    document.title = `(${this.state.TARGET_COUNT}) Random Count Up`;
    this.countUp();
  }

  componentDidUpdate() {
    if (this.state.isComplete) {
      this.cleanUp();
    }
  }

  componentWillUnmount() {
    this.cleanUp();
  }

  #clearId = 0;

  countUp() {
    const { fps, step } = this.props;

    this.#clearId = setInterval(() => {
      this.setState(
        {
          count: this.state.count + step,
        },
        () => {
          const { count, TARGET_COUNT } = this.state;

          if (count >= TARGET_COUNT) {
            this.setState({
              count: TARGET_COUNT,
            });
          }
        }
      );
    }, 1000 / fps);
  }

  cleanUp() {
    clearInterval(this.#clearId);
  }
}

export default RandomCountUp;

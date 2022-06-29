import React from 'react';
import './RandomCountUp.css';

class RandomCountUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.current ?? 0,
    };
  }

  render() {
    return (
      <div className="randomCountUp">
        <output>{this.state.count}</output>
      </div>
    );
  }

  componentDidMount() {}
}

export default RandomCountUp;

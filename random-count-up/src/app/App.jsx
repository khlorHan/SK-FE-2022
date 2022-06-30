import './App.css';
import { Component } from 'react';
import { RandomCountUp, Button } from '@/components';
import { getRandom } from '@/utils';

// stateful component
class App extends Component {
  state = {
    reCountUpKey: 100,
  };

  render() {
    return (
      <div className="app">
        <Button
          lang="en"
          style={{
            position: 'fixed',
            zIndex: 1000,
            top: 20,
            right: 20,
          }}
          onClick={this.handleReCountUp}
        >
          Re Count Up
        </Button>
        <RandomCountUp
          key={this.state.reCountUpKey}
          // min={10}
          // max={90}
          // step={9}
          // fps={15}
        />
      </div>
    );
  }

  handleReCountUp = () => {
    this.setState(({ reCountUpKey }) => ({
      reCountUpKey: reCountUpKey + getRandom(100),
    }));
  };
}

export default App;

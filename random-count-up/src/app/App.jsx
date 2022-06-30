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
          onClick={this.handleReCountUp}
          style={{
            position: 'fixed',
            zIndex: 1000,
            top: 20,
            right: 20,
          }}
        >
          Re Count Up
        </Button>
        <RandomCountUp
          key={this.state.reCountUpKey}
          min={32}
          max={88}
          step={2}
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

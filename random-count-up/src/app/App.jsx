import './App.css';
import { Component } from 'react';
import { RandomCountUp } from '@/components';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RandomCountUp min={20} max={40} step={9} fps={15} />
      </div>
    );
  }
}

export default App;

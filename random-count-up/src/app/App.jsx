import './App.css';
import { Component } from 'react';
import { RandomCountUp } from '@/components';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RandomCountUp />
      </div>
    );
  }
}

export default App;

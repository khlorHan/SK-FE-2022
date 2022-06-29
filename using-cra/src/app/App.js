import logo from 'assets/logo.svg';
import { calcTax } from 'utils';
import './App.css';

function App() {
  calcTax(10_000);

  return (
    <div className="App">
      <header className="App-header">
        <img data-testid="logo" src={logo} className="App-logo" alt="React" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

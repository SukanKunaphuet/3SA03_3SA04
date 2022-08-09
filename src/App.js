/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App; */

import CharacterCard from './CharacterCard';
const word = "Hello"

function App() {
  return (
    <div>
      {
        Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
      }
    </div>
  );
}
export default App;

import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  
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
        <p>The current time is {new Date(Math.round(currentTime)).toLocaleString()}. Time in js: {new Date().toLocaleString()}</p>
      </header>
    </div>
  );
}

export default App;

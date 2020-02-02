// App.js
// 2020-02-01
import React from 'react';
import logo from './logo.svg';
import FileInput from './FileInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upload a video to caption...
        </p>
        <FileInput />
      </header>
    </div>
  );
}

export default App;

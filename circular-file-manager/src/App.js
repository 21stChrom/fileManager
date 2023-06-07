import React from 'react';
import './App.css';
import Filemanager from './Filemanager';

function App() {
  return (
    <div className="App">
 -
    <div className="container">
      <h1 style={{ color: 'neonGreen' }}>Welcome to my App</h1>
      <div className="card">
        <h2 style={{ color: 'solidRed' }}>Card Title</h2>
        <p>Card content goes here</p>
        <button style={{ backgroundColor: 'brightBlue', color: 'solidWhite', border: '2px solid brightPink' }}>Button 1</button>
        <button style={{ backgroundColor: 'brightPink', color: 'solidWhite', border: '2px solid neonGreen' }}>Button 2</button>
      </div>
    </div>
      <App />
    </div>
  );
}

export default App;

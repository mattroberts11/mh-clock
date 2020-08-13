import React from 'react';
import Background from '../Background';
import Power from '../Power';
import UpDown from '../UpDown';
import './App.css';


function App() {
  return (
    <div className="App">
      <Background />
        <UpDown />
        <Power />
    </div>
  );
}

export default App;
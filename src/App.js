import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import React from "react";

function App() {
  return (
    <div className="App">
      <Weather value={2} />
    </div>
  );
}

export default App;

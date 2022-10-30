import React from "react";

import Weather from "./pages/Weather";

import './App.css';

function App() {
  let hours = (new Date()).getHours(); 

  function updateBackground() {
    if (hours >= 19 || hours <= 6) {
      return "card-night";
    } else {
      return "card-day";
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lima" cardImage={ updateBackground() } />
      </div>
    </div>
  );
}

export default App;

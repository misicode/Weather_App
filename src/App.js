import React from "react";

import Weather from "./pages/Weather";

import './App.css';

function App() {
  let hours = (new Date()).getHours(); 

  function updateBackground() {
    if (hours >= 19 || hours <= 6) {
      return {bgColor: "bg-evening", cardImage: "card-evening"};
    } else if (hours <= 17) {
      return {bgColor: "bg-morning", cardImage: "card-morning"};
    } else {
      return {bgColor: "bg-afternoon", cardImage: "card-afternoon"};
    }
  }

  return (
    <div className={`App ${ updateBackground().bgColor }`}>
      <div className="container">
        <Weather defaultCity="Lima" cardImage={ updateBackground().cardImage } />
      </div>
    </div>
  );
}

export default App;

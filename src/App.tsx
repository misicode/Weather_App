import Weather from "./pages/Weather";

import "./App.css";

const hours: number = new Date().getHours();

const updateBackground = (): string => {
  return (hours >= 19 || hours <= 6)
  ? "card-night"
  : "card-day";
}

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Lima" cardBackground={ updateBackground() } />
      </div>
    </div>
  );
}

export default App;
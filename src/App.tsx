import Weather from "./pages/Weather";

import "./App.css";

const date: Date = new Date();

const updateBackground = (): string => {
  const hours: number = date.getHours();

  return (hours >= 19 || hours <= 6)
  ? "card-night"
  : "card-day";
}

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Lima" date={ date } cardBackground={ updateBackground() } />
      </div>
    </div>
  );
}

export default App;
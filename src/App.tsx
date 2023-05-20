import Weather from "./pages/Weather";

import "./App.css";

const date: Date = new Date();

export const updateBackground = (date: Date): string => {
  const hours: number = date.getHours();

  return (hours >= 19 || hours <= 6)
    ? "card-night"
    : "card-day";
}

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Lima" date={ date } cardBackground={ updateBackground(date) } />
      </div>
    </div>
  );
}

export default App;
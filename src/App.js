import './App.css';

import BarOption from './components/BarOption';
import Footer from './components/Footer';
import ForecastCard from './components/ForecastCard';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <div className="App">
      <div class="app">
        <div class="container">
          <div class="card">
            <section class="weather-today">
              <div class="content">
                <h6>Today</h6>
                <h4 id="date">Date</h4>
                <WeatherInfo />
              </div>
            </section>
            <section class="weather-week">
              <div class="content">
                <BarOption />
                <div class="content-week">
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

export interface Weather {
  city: string;
  country: string;
  date: Date;
  humidity: number;
  wind: number;
  icon: string;
  temperature: number;
  climate: string;
  coordinates: Coordinates;
}

export interface Forecast {
  dt: number;
  weather: Climate[];
  temp: Temperature;
  humidity: number;
  wind_speed: number;
};

export interface Coordinates {
  lat: number;
  lon: number;
}

interface Climate {
  main: string;
  icon: string;
};

interface Temperature {
  min: number;
  max: number;
};

export interface StringMap {
  [key: string]: string;
}

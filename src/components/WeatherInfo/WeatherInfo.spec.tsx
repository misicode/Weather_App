import { render, screen } from "@testing-library/react";

import WeatherInfo, { formatTime } from "./WeatherInfo";
import { Weather } from "../../types";

describe("Test <WeatherInfo />", () => {
  const data: Weather = {
    date: new Date(1682874000 * 1000),
    city: "Lima",
    country: "PE",
    icon: "04d",
    temperature: 23.5,
    climate: "Clouds",
    humidity: 80,
    wind: 4.35,
    coordinates: { lat: -12.0432, lon: -77.0282 }
  };

  beforeEach(() => {
    render(<WeatherInfo data={ data } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

  test("Should render the weather information", () => {
    const place = screen.getByRole("heading");

    expect(place).toBeInTheDocument();
    expect(place).toHaveTextContent("Lima, PE");

    const data = screen.getAllByRole("note");
    
    expect(data[0]).toBeInTheDocument();
    expect(data[0]).toHaveTextContent("Last update: 12:00 PM");
    
    expect(data[1]).toBeInTheDocument();
    expect(data[1]).toHaveTextContent("Humidity: 80 %");

    expect(data[2]).toBeInTheDocument();
    expect(data[2]).toHaveTextContent("Wind: 4.35 km/h");
    
    expect(data[3]).toBeInTheDocument();
    expect(data[3]).toHaveTextContent("24");
    
    expect(data[4]).toBeInTheDocument();
    expect(data[4]).toHaveTextContent("Clouds");
  });

  test("Should format the date for AM", () => {
    expect(formatTime(new Date(1584014593 * 1000))).toBe("07:03 AM");
    expect(formatTime(new Date(1584025793 * 1000))).toBe("10:09 AM");
  });

  test("Should format the date for PM", () => {
    expect(formatTime(new Date(1684015793 * 1000))).toBe("17:09 PM");
    expect(formatTime(new Date(1684025793 * 1000))).toBe("19:56 PM");
  });
});

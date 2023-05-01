import { render, screen } from "@testing-library/react";

import ForecastCard from "./ForecastCard";
import { Forecast } from "../../../types";

describe("Test <ForecastCard />", () => {
  const data: Forecast = {
    dt: 1682874000,
    weather: [{ main: "Clouds", icon: "04d" }],
    temp: { min: 21.31, max: 23.28},
    humidity: 80,
    wind_speed: 4.35,
  };

  beforeEach(() => {
    render(<ForecastCard data={ data } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

  test("Should render the format date elements", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});

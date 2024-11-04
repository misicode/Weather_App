import { render, screen } from "@testing-library/react";

import ForecastCard from "./ForecastCard";
import { ForecastDay } from "../../../types";

describe("Test <ForecastCard />", () => {
  const data: ForecastDay = {
    dt: 1682874000,
    weather: [{ main: "Clouds", icon: "04d" }],
    main: { humidity: 80, temp_min: 21.31, temp_max: 23.28},
    wind: { speed: 4.35 },
  };

  beforeEach(() => {
    render(<ForecastCard data={ data } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

  test("Should render the forecast card elements", () => {
    const date = screen.getByRole("heading");

    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent("Sunday");

    const data = screen.getAllByRole("note");
    
    expect(data[0]).toBeInTheDocument();
    expect(data[0]).toHaveTextContent("23.28°");
    
    expect(data[1]).toBeInTheDocument();
    expect(data[1]).toHaveTextContent("21.31°");

    expect(data[2]).toBeInTheDocument();
    expect(data[2]).toHaveTextContent("Clouds");
    
    expect(data[3]).toBeInTheDocument();
    expect(data[3]).toHaveTextContent("Humidity: 80 %");
    
    expect(data[4]).toBeInTheDocument();
    expect(data[4]).toHaveTextContent("Wind: 4.35 km/h");
  });
});

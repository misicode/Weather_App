import { render, screen } from "@testing-library/react";

import Forecast from "./Forecast";
import { forecastData } from "./Forecast.mock.spec";

jest.mock("../../hooks/useForecastData", () => ({
  useForecastData: () => forecastData
}));

describe("Test <Forecast />", () => {
  const coords = { lat: -12.0432, lon: -77.0282 };

  beforeEach(() => {
    render(<Forecast coords={ coords } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

  test("Should create 6 weather forecast groups", () => {
    const forecastGroups = screen.getAllByRole("group");
    
    expect(forecastGroups).toHaveLength(6);
  });
});

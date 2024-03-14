import { render, screen } from "@testing-library/react";

import * as UseForecastData from "../../hooks/useForecastData";
import Forecast from "./Forecast";
import { forecastData } from "./Forecast.mock.spec";

jest.mock("../../hooks/useForecastData", () => ({
  useForecastData: jest.fn(),
}));

describe("Test <Forecast />", () => {
  const coords = { lat: -12.0432, lon: -77.0282 };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should create the component with forecastData", () => {
    jest
      .spyOn(UseForecastData, "useForecastData")
      .mockReturnValue(forecastData);

    render(<Forecast coords={coords} />);
    expect(screen).toBeTruthy();
  });

  test("Should create 6 weather forecast groups", () => {
    jest
      .spyOn(UseForecastData, "useForecastData")
      .mockReturnValue(forecastData);

    render(<Forecast coords={coords} />);

    const forecastGroups = Array.from(Array(6).keys()).map(index =>
      screen.getByTestId(`forecast-group-${ index + 1 }`)
    );
    expect(forecastGroups).toHaveLength(6);
  });

  test("Should create the component without forecastData", () => {
    jest
      .spyOn(UseForecastData, "useForecastData")
      .mockReturnValue(undefined);
      
    render(<Forecast coords={coords} />);
    expect(screen).toBeTruthy();
  });
});

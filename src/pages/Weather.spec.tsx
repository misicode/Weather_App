import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import * as UseForecastData from "../hooks/useForecastData";
import * as UseWeatherData from "../hooks/useWeatherData";
import { forecastData } from "../components/Forecast/Forecast.mock.spec";
import { weatherData } from "./Weather.mock.spec";
import Weather from "./Weather";

jest.mock("../hooks/useWeatherData", () => ({
  useWeatherData: jest.fn(),
}));
jest.mock("../hooks/useForecastData", () => ({
  useForecastData: jest.fn(),
}));

describe("Test <Weather />", () => {
  const date = new Date();
  const cardBackground = "card-day";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should create the component with weatherData and forecastData", async() => {
    jest
      .spyOn(UseWeatherData, "useWeatherData")
      .mockReturnValue(weatherData);
    jest
      .spyOn(UseForecastData, "useForecastData")
      .mockReturnValue(forecastData);

    await act(async () => {
      render(<Weather defaultCity="Lima" date={ date } cardBackground={ cardBackground } />);
    });
    
    expect(screen).toBeTruthy();
  })

  test("Should create the component when change city", async() => {
    jest
      .spyOn(UseWeatherData, "useWeatherData")
      .mockReturnValue(weatherData);
    jest
      .spyOn(UseForecastData, "useForecastData")
      .mockReturnValue(forecastData);

    await act(async () => {
      render(<Weather defaultCity="Huancavelica" date={ date } cardBackground={ cardBackground } />);
    });

    const form = screen.getByRole("form");
    const input: HTMLInputElement = screen.getByRole("searchbox");

    // Asigna el valor del input
    fireEvent.change(input, { target: { value: "Lima" } });
    // Envía el formulario
    fireEvent.submit(form);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Lima, PE")
  })

  test("Should create the component without weatherData", async() => {
    jest
      .spyOn(UseWeatherData, "useWeatherData")
      .mockReturnValue(undefined);

    await act(async () => {
      render(<Weather defaultCity="Lima" date={ date } cardBackground={ cardBackground } />);
    });
    
    expect(screen).toBeTruthy();
  })
});
import { render, screen } from "@testing-library/react";

import App, { updateBackground } from "./App";

jest.mock("./hooks/useWeatherData", () => ({
  useWeatherData: jest.fn(),
}));
jest.mock("./hooks/useForecastData", () => ({
  useForecastData: jest.fn(),
}));

describe("Test <App />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should create the component", () => {
    render(<App />);

    expect(screen).toBeTruthy();
  });

  test("Should show the background of day", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date(1584025793 * 1000));

    expect(updateBackground(new Date())).toBe("card-day");
  });

  test("Should show the background of night", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date(1684025793 * 1000));

    expect(updateBackground(new Date())).toBe("card-night");
  });
});

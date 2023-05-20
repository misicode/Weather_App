import { renderHook, RenderHookResult } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import * as GetWeather from "../helpers/getWeather";
import { forecastData } from "../components/Forecast/Forecast.mock.spec";
import { Forecast } from "../types";
import { useForecastData } from "./useForecastData";

jest.mock("../helpers/getWeather", () => ({
  searchForecast: jest.fn(),
}));

describe("Test custom hook useForecastData", () => {
  const coords = { lat: -12.0432, lon: -77.0282 };
  let hook: RenderHookResult<unknown, Forecast>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should create the initial state with forecastData", async() => {
    jest
      .spyOn(GetWeather, "searchForecast")
      .mockResolvedValue({ daily: forecastData });

    await act(async () => {
      hook = renderHook(() => useForecastData(coords));
    });

    expect(hook!.result.current).toBe(forecastData);
  });

  test("Should create the initial state without forecastData", async() => {
    jest
      .spyOn(GetWeather, "searchForecast")
      .mockResolvedValue({ daily: undefined });

    await act(async () => {
      hook = renderHook(() => useForecastData(coords));
    });

    expect(hook!.result.current).toBeUndefined();
  });
});

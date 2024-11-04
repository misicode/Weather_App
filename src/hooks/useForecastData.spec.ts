import { renderHook, RenderHookResult } from "@testing-library/react";
import { act } from "react";

import * as GetWeather from "../helpers/getWeather";
import { forecastData } from "../components/Forecast/Forecast.mock.spec";
import { ForecastDay } from "../types";
import { useForecastData } from "./useForecastData";

jest.mock("../helpers/getWeather", () => ({
  searchForecast: jest.fn(),
}));

describe("Test custom hook useForecastData", () => {
  const coords = { lat: -12.0432, lon: -77.0282 };
  let hook: RenderHookResult<unknown, ForecastDay>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should create the initial state with forecastData", async() => {
    jest
      .spyOn(GetWeather, "searchForecast")
      .mockResolvedValue({ list: forecastData });

    await act(async () => {
      hook = renderHook(() => useForecastData(coords));
    });

    expect(hook!.result.current).toBe(forecastData);
  });

  test("Should create the initial state without forecastData", async() => {
    jest
      .spyOn(GetWeather, "searchForecast")
      .mockResolvedValue({ list: undefined });

    await act(async () => {
      hook = renderHook(() => useForecastData(coords));
    });

    expect(hook!.result.current).toBeUndefined();
  });
});

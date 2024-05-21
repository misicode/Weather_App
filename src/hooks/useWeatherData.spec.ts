import { renderHook, RenderHookResult } from "@testing-library/react";
import { act } from "react";

import * as GetWeather from "../helpers/getWeather";
import { coords, weatherData, weatherDataResponse } from "../pages/Weather.mock.spec";
import { Weather } from "../types";
import { useWeatherData } from "./useWeatherData";

jest.mock("../helpers/getWeather", () => ({
  searchWeatherByCity: jest.fn(),
  searchWeatherByCoords: jest.fn(),
}));

describe("Test custom hook useWeatherData", () => {
  let hook: RenderHookResult<unknown, Weather>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should create the initial state with weatherData by city", async() => {
    jest
      .spyOn(GetWeather, "searchWeatherByCity")
      .mockResolvedValue(weatherDataResponse);

    await act(async () => {
      hook = renderHook(() => useWeatherData("Lima"));
    });
    
    expect(hook!.result.current).toStrictEqual(weatherData);
  });

  test("Should create the initial state with weatherData by coordinates", async() => {
    jest
      .spyOn(GetWeather, "searchWeatherByCoords")
      .mockResolvedValue(weatherDataResponse);

    await act(async () => {
      hook = renderHook(() => useWeatherData(coords));
    });
    
    expect(hook!.result.current).toStrictEqual(weatherData);
  });

  test("Should create the initial state without weatherData", async() => {
    jest
      .spyOn(GetWeather, "searchWeatherByCity")
      .mockResolvedValue(undefined);

    await act(async () => {
      hook = renderHook(() => useWeatherData("Lima"));
    });

    expect(hook!.result.current).toBeUndefined();
  });
});

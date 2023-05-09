import { renderHook } from "@testing-library/react";
import { useForecastData } from "./useForecastData";

describe("Test hook useForecastData", () => {
  test("Should create the initial state", () => {
    const { result } = renderHook(() =>
      useForecastData({ lat: -12.0432, lon: -77.0282 })
    );
    console.log(result);
  });
});

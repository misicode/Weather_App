import { render, screen } from "@testing-library/react";

import WeatherIcon from "./WeatherIcon";

describe("Test <WeatherIcon />", () => {
  beforeEach(() => {
    render(<WeatherIcon code="04d" size={ 35 } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

});

import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";
import { coords } from "../../pages/Weather.mock.spec";

describe("Test <SearchBar />", () => {
  const onNewCity = jest.fn();
  const inputValue = "Lima";

  beforeEach(() => {
    render(<SearchBar onNewCity={ onNewCity } />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should submit the form with a valid city name", () => {
    const form = screen.getByRole("form");
    const input: HTMLInputElement = screen.getByRole("searchbox");

    // Asigna el valor del input
    fireEvent.input(input, { target: { value: inputValue } });

    // Verifica que el valor del input sea el asignado
    expect(input.value).toBe(inputValue);

    // Envía el formulario
    fireEvent.submit(form);

    // Verifica que el valor del input está vacío
    expect(input.value).toBe("");
    // Verifica que la función onNewCity fue llamada
    expect(onNewCity).toHaveBeenCalled();
    // Verifica que la función onNewCity fue llamada con el valor del input asignado
    expect(onNewCity).toHaveBeenCalledWith(inputValue);
  });

  test("Should submit the form with a valid city coordinates", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: -12.0432,
              longitude: -77.0282,
            },
          })
        )
      ),
    };

    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
    });

    const button = screen.getByRole("button", { name: "Location" });

    // Presiona el botón para obtener las coordenadas
    fireEvent.click(button);

    // Verifica que la función onNewCity fue llamada
    expect(onNewCity).toHaveBeenCalled();
    // Verifica que la función onNewCity fue llamada con las coordenadas asignadas
    expect(onNewCity).toHaveBeenCalledWith(coords);
  });

  test("Should not submit the form with an invalid value", () => {
    const form = screen.getByRole("form");
    const input: HTMLInputElement = screen.getByRole("searchbox");

    // Asigna el valor del input
    fireEvent.input(input, { target: { value: "" } });

    // Verifica que el valor del input está vacío
    expect(input.value).toBe("");

    // Intenta envíar el formulario
    fireEvent.submit(form);

    // Verifica que la función onNewCity no haya sido llamada
    expect(onNewCity).toHaveBeenCalledTimes(0);
  });
});

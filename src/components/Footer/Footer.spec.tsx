import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Test <Footer />", () => {
  const year = new Date().getFullYear();

  beforeEach(() => {
    render(<Footer year={ year } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

  test("Should render the footer elements", () => {
    const credits = screen.getByRole("note");

    expect(credits).toBeInTheDocument();
    expect(credits).toHaveTextContent(`${ year } Learning and Programming | Coded by MISICODE`);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href", 
      "https://github.com/misicode/WeatherApp"
    );
  });
});

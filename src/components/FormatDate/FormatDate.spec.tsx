import { render, screen } from "@testing-library/react";

import FormatDate from "./FormatDate";

describe("Test <FormatDate />", () => {
  const date = new Date("January 12, 2023");

  beforeEach(() => {
    render(<FormatDate date={ date } />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });

  test("Should render the format date elements", () => {
    const formatDate = screen.getByRole("heading");

    expect(formatDate).toBeInTheDocument();
    expect(formatDate).toHaveTextContent("Thursday, 12th January 2023");
  });
});

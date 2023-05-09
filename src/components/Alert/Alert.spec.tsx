import { render, screen } from "@testing-library/react";

import Alert from "./Alert";

describe("Test <Alert />", () => {
  beforeEach(() => {
    render(<Alert />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });
});

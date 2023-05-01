import { render, screen } from "@testing-library/react";

import Loader from "./Loader";

describe("Test <Loader />", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });
});

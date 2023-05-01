import { render, screen } from "@testing-library/react";

import Spinner from "./Spinner";

describe("Test <Spinner />", () => {
  beforeEach(() => {
    render(<Spinner />);
  });

  test("Should create the component", () => {
    expect(screen).toBeTruthy();
  });
});

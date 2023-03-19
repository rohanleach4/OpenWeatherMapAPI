import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test("displays the header text", () => {
    render(<App />);
    const headerText = screen.getByText(
      /Weather Application: OpenWeatherMap API/i
    );
    expect(headerText).toBeInTheDocument();
  });
});

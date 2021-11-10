import React from "react";
import { Header } from "../components";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render Header with title", () => {
    render(<App />);
    const titleName = screen.getByRole("heading");
    expect(titleName).toBeInTheDocument();
  });
});

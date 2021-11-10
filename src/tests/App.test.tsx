import React from "react";
import { Header } from "../components";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render Header with title", () => {
    const titleName = screen.getByRole("heading");
    expect(titleName).toBeInTheDocument();
  });

  it("should render Search component with search Input", () => {
    const title = screen.getByText("Search Here");
    const input = screen.getByRole('searchbox', { name: 'Search by artist name' });
    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("should render Result component", () => {
    const results = screen.getByText("Search Result");
    expect(results).toBeInTheDocument();
  });

  it("should render the footer component", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});

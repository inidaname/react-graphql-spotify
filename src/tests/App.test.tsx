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

  it('should render Search component', () => {
		const { getByText, getByRole } = render(<App />);

		const title = getByText('Search');

		expect(title).toBeInTheDocument();
  });
});

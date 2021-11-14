import React from "react";
import { act, render, RenderResult } from "@testing-library/react";
import App from "../App";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "./mock/result";


describe("App component", () => {
  let rendered: RenderResult
  beforeEach( async() => {
    await act(async () => {
      rendered = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>
      )
    })
  });

  it("should render Header with title", () => {
    const titleName = rendered.getByRole("heading");
    expect(titleName).toBeInTheDocument();
  });

  it("should render Search component with search Input", () => {
    const input = rendered.getByRole('searchbox', { name: 'Search by artist name' });
    expect(input).toBeInTheDocument();
  });

  it('should render button component', () => {
    const button = rendered.getByRole('button', { name: 'Search'});
    expect(button).toBeInTheDocument();
  });

  it("should render Result component", () => {
    const results = rendered.getByText("Search Result");
    expect(results).toBeInTheDocument();
  });

  it("should render the footer component", () => {
    const footer = rendered.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});

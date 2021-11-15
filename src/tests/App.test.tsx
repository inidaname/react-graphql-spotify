import React from "react";
import { act, fireEvent, render, RenderResult } from "@testing-library/react";
import App from "../App";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "./mock/result";
import waitForExpect from "wait-for-expect";
import { Result } from "../components";

describe("App component", () => {
  let rendered: RenderResult;

  beforeEach(async () => {
    await act(async () => {
      rendered = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      );
    });

    jest.mock("@apollo/react-hooks", () => {
      const data = { mocks }; // put your mock data here
      return {
        __esModule: true,
        useQuery: jest.fn(() => ({ data })),
      };
    });
  });

  it("should render Header with title", () => {
    const titleName = rendered.getByRole("heading");
    expect(titleName).toBeInTheDocument();
  });

  it("should render Search component with search Input", () => {
    const input = rendered.getByRole("searchbox", {
      name: "Search by artist name",
    });
    expect(input).toBeInTheDocument();
  });

  it("should render button component", () => {
    const button = rendered.getByRole("button", { name: "Search" });
    expect(button).toBeInTheDocument();
  });

  async function wait(ms = 0) {
    await act(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    });
  }

  it("should render Result component", async () => {
    expect(rendered.queryByText("Search Result")).toBe(null);

    await wait();


    await waitForExpect(async () => {

      await wait();

      rendered.rerender(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Result data={mocks[0].data} />
        </MockedProvider>
      );

      expect(rendered.getByText("Search Result")).toBeInTheDocument();
    });
  });

  it("should render the footer component", () => {
    const footer = rendered.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});

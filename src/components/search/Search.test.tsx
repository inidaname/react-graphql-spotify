import React, { useState } from "react";
import { render, fireEvent, screen, act, RenderResult } from "@testing-library/react";
import { Search } from "..";
import { MockedProvider } from "@apollo/client/testing";
import App from "../../App";
import mocks from "../../tests/mock/result";
import userEvent from "@testing-library/user-event";
import axios from "axios";

describe("Search component", () => {
  let mockJest: typeof jest;
  let rendered: RenderResult;
  beforeEach(async () => {
    await act(async () => {
       rendered = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>
      )
    })
  });

  beforeAll(() => {
    mockJest = jest.mock("axios");
  });

  it("should allow input event on search input",  async() => {
    const input: HTMLInputElement = rendered.getByRole("searchbox", {
      name: "Search by artist name",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Kendrik" } });
    expect(input.value).toBe("Kendrik");
  });
});

import React from "react";
import { render, fireEvent, act, RenderResult } from "@testing-library/react";
import { Search } from "..";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "../../tests/mock/result";

describe("Search component", () => {
  let rendered: RenderResult;
  let value: string = "Eminem";
  beforeEach(async () => {
    window.scroll = jest.fn()
    const mockCallBack = jest.fn();
    await act(async () => {
      rendered = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Search handleSubmit={mockCallBack} values={value} handleChange={mockCallBack} />
        </MockedProvider>
      );
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });


  it("should allow input event on search input", async () => {
    const input: HTMLInputElement = rendered.getByRole("searchbox", {
      name: "Search by artist name",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: value } });
    expect(input.value).toBe(value);
  });
});

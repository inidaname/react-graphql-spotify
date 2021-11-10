import React, { useState } from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { Search } from "..";
import App from "../../App";
import mocks from "../../tests/mock/result";
import userEvent from "@testing-library/user-event";
import axios from 'axios';


describe("Search component", () => {
  let mockJest: typeof jest;
  beforeEach(() => {
    render(<App />);
  });

  beforeAll(() => {
    mockJest = jest.mock('axios')
  });


  it("should allow input event on search input", () => {
    const input: HTMLInputElement = screen.getByRole("searchbox", {
      name: "Search by artist name",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Kendrik" } });
    expect(input.value).toBe("Kendrik");
  });

  it("should mock search result", async () => {
    const getSpy = mockJest.spyOn(axios, 'get');
    const input: HTMLInputElement = screen.getByRole("searchbox", {
      name: "Search by artist name",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Eminem" } });
    expect(getSpy).toBeCalled()

  });
});

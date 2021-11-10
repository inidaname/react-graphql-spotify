import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { Search } from "..";

describe("Search component", () => {
  beforeEach(() => {
    render(<Search />);
  });

  it("should allow input event on search input", () => {
    const input: HTMLInputElement = screen.getByRole("searchbox", {
      name: "Search by artist name",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Kendrik" } });
    expect(input.value).toBe("Kendrik");
  });
});
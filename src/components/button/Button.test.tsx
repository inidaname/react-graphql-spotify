import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { act, fireEvent, render, RenderResult } from "@testing-library/react";
import mocks from "../../tests/mock/result";
import userEvent from "@testing-library/user-event";
import AppContext from "../../context";
import { Button } from "..";
import { ContextState } from "../../types";

describe("Button component", () => {
  const myMock = jest.fn();
  let rendered: RenderResult;

  beforeEach(async () => {
    
    await act(async () => {
      rendered = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Button handleSubmit={myMock} />
        </MockedProvider>
      );
    });
  });

  it("should click to search value", async () => {
    const button: HTMLButtonElement = rendered.getByRole("button", {
      name: "Start Search",
    }) as HTMLButtonElement;

    await act(async () => {
      userEvent.click(button);
    });
    await act(
      async () => await new Promise((resole) => setTimeout(resole, 1000))
    );
    
    expect(myMock).toBeCalledTimes(1);
  });
});

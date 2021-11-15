import { MockedProvider } from "@apollo/client/testing";
import { act, render, RenderResult } from "@testing-library/react";
import mocks from "../../tests/mock/result";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe('Button component', () => {

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

  it("should click to search value", () => {
    const button: HTMLButtonElement = rendered.getByRole("button", {
      name: "Search",
    }) as HTMLButtonElement;

    userEvent.click(button)
    expect(button.disabled).toBeTruthy()
  });

});
import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import { act, render, RenderResult } from "@testing-library/react";
import mocks from "../../tests/mock/result";
import userEvent from "@testing-library/user-event";
import { Result } from "..";
import { Album } from "../../generated/graphql";

describe("Result component", () => {
  let rendered: RenderResult;
  let clickedElement: Album[];
  let actualResult: NodeListOf<Element>;
  beforeEach(async () => {
    window.scroll = jest.fn()
    await act(async () => {
      rendered = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Result data={mocks[0].data} />
        </MockedProvider>
      );
    });
  });

  beforeEach(() => {
    actualResult = rendered.container.querySelectorAll(".actualResult");
    actualResult.forEach((element, i) => {
      userEvent.click(element);
      clickedElement = mocks[0].data.queryArtists[i].albums;
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render children with value of result", () => {
    expect(actualResult.length).toEqual(mocks[0].data.queryArtists.length);
  });

  it("should render children of albums after click", async () => {
    const subResult = rendered.container.querySelectorAll(".subResult");
    expect(clickedElement.length).toEqual(subResult.length);
  });
});

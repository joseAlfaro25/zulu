import React from "react";
import Layout from "./Layout";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
  };
});
describe("Layout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Layout>
          <div></div>
        </Layout>
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
  it("Sending information in search input", () => {
    const textTest = "data success";
    render(
      <MemoryRouter>
        <Layout>
          <div></div>
        </Layout>
      </MemoryRouter>
    );
    const inputSearch = screen.getByRole("searchbox");
    const button = screen.getByRole("button");
    userEvent.clear(inputSearch);
    act(() => {
      userEvent.type(inputSearch, textTest);
    });
    userEvent.click(button);
    expect(inputSearch).toHaveValue(textTest);
  });
});

import React from "react";
import Layout from "./Layout";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useNavigate: jest.fn(),
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
});

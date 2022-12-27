import React from "react";
import "@testing-library/jest-dom";
import CardItem from "./CardItem";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useHref: jest.fn(),
  };
});
describe("Card Items", () => {
  const data = {
    id: 1,
    title: "test",
    price: 10020,
    image: "http://test",
    rate: 2.5,
    count: 4,
    category: "test",
    description: "test description",
  };
  it("should render successfully", () => {
    const { baseElement } = render(
      <MemoryRouter>
        <CardItem {...data} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
  it("Elements referenced correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardItem {...data} />
      </MemoryRouter>
    );
    expect(getByText(/test/i)).toBeInTheDocument();
  });
});

import React from "react";
import "@testing-library/jest-dom";
import Product from "./Product";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
describe("Product", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={["q?=mens"]}>
        <Product />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});

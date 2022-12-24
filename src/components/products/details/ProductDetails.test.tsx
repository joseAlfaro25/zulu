import React from "react";
import "@testing-library/jest-dom";
import ProductDetails from "./ProductDetails";
import { render } from "@testing-library/react";
describe("Advisors", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProductDetails />);
    expect(baseElement).toBeTruthy();
  });
});

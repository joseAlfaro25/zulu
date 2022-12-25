import React from "react";
import "@testing-library/jest-dom";
import ProductDetails from "./ProductDetails";
import { render } from "@testing-library/react";
describe("Product Details", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProductDetails />);
    expect(baseElement).toBeTruthy();
  });
});

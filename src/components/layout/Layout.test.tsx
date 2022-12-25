import React from "react";
import Layout from "./Layout";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Layout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Layout>
        <div></div>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});

import React, { lazy } from "react";
import { IRouter } from "./Routes";
import Layout from "../components/layout/Layout";

const Product = lazy(() => import("../components/products/Product"));
const ProductsDetails = lazy(
  () => import("../components/products/details/ProductDetails")
);

const router: IRouter[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
    key: 1,
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <ProductsDetails />
      </Layout>
    ),
    key: 2,
  },
];

export default router;

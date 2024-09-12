import React, { lazy } from "react";
import { IRouter } from "./Routes";
import Layout from "../components/layout/Layout";
import RegisterUser from "components/register_user/Register_user";
import Table from "components/events/Events";

const Product = lazy(() => import("../components/products/Product"));
const ProductsDetails = lazy(
  () => import("../components/products/details/ProductDetails")
);

const router: IRouter[] = [
  {
    path: "/",
    element: (
      <Layout>
        <></>
      </Layout>
    ),
    key: 1,
  },
  {
    path: "/register",
    element: (
      <Layout>
        <RegisterUser />
      </Layout>
    ),
    key: 2,
  },
  {
    path: "/admin",
    element: (
      <Layout>
        <Table />
      </Layout>
    ),
    key: 1,
  },
  {
    path: "/api/items",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
    key: 4,
  },
  {
    path: "/api/items/:id",
    element: (
      <Layout>
        <ProductsDetails />
      </Layout>
    ),
    key: 5,
  },
];

export default router;

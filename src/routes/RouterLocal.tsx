import React, { lazy } from 'react';
import { IRouter } from './Routes';
import Product from '../components/products/Product';

const Home = lazy(() => import('../components/products/Product'));


const router: IRouter[] = [
  {
    path: '/product',
    element: <Product />,
    key: 1,
  }
];

export default router;

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LocalRoutes from './RouterLocal';


export interface IRouter {
  element: React.ReactNode;
  path: string;
  key: number;
}

const RouterComponent = () => {
  const routerPath: IRouter[] = [...LocalRoutes];
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routerPath.map(({ path, element, key }: IRouter) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default RouterComponent;

import React, { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <div>
        <input type="search" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

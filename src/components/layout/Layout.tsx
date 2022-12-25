import React, { ReactNode } from "react";
import "./_Layout.styles.scss";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="wapper-layout">
      <div className="wapper-nav">
        <div className="container-search">
          <img className="container-search__img" />
          <input type="search" className="container-search__box" />
        </div>
      </div>
      <div className="container-info-layout">{children}</div>
    </div>
  );
};

export default Layout;

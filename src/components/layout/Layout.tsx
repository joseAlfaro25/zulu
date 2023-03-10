import React, { ReactNode, useState } from "react";
import "./_Layout.styles.scss";
import { Images } from "image";
import { Link, useNavigate } from "react-router-dom";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChange = (value: string) => {
    setSearch(value);
  };
  const onClick = () => {
    navigate(`../api/items?q=${search}`, { replace: true });
  };

  return (
    <div className="wapper-layout">
      <div className="wapper-nav">
        <div className="container-search container_general">
          <Link to="/">
            <img
              className="container-search__img"
              src={Images.logo}
              alt="logo de la tienda"
            />
          </Link>
          <div className="container-search__box">
            <input
              type="search"
              className="container-search__box__input-search"
              placeholder="Buscar por nombre"
              name="search"
              onChange={({ target }) => onChange(target.value)}
            />
            <button
              className="container-search__box__image-container"
              onClick={onClick}
            >
              <img
                src={Images.search}
                alt="boton de busqueda"
                className="container-search__box__image"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="container-info-layout custom-scroll">{children}</div>
    </div>
  );
};

export default Layout;

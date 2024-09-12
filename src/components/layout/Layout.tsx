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
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const onChange = (value: string) => {
    setSearch(value);
  };

  const onClick = () => {
    navigate(`../api/items?q=${search}`, { replace: true });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="wapper-layout">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src={Images.logo} alt="logo de la tienda" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      {/* Menú lateral */}
      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="container-info-layout custom-scroll">{children}</div>
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        setMenuActive(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/" className="logo"></Link>
          <div id="menu-toggle" onClick={toggleMenu}>
            <i className="fa fa-2x fa-bars"></i>
          </div>
          <ul className={`menu-items ${menuActive ? "active" : ""}`}>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/pages/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/pages/cv">CV</Link>
            </li>
            <li>
              <Link to="/pages/about">Om mig</Link>
            </li>
            <li>
              <Link to="/pages/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

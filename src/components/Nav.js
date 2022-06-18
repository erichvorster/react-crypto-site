import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav__logo">
        <h1>Crypti</h1>
      </div>
      <div className="links__container">
        <ul className="nav__links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/prices">
              Prices
            </Link>
          </li>
          <li>
            <Link className="link" to="/stats">
              Stats
            </Link>
          </li>
          <li>
            <Link className="link" to="/news">
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

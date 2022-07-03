import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/cloudcoin.png";
import Button from "@mui/material/Button";
import "./Nav.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    // <nav>
    //   <div className="nav__logo">
    //     <h1>Crypti</h1>
    //   </div>
    //   <div className="links__container">
    //     <ul className="nav__links">
    //       <li>
    //         <Link className="link" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/prices">
    //           Prices
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/stats">
    //           Stats
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/news">
    //           News
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul class={navOpen ? "nav-links nav-active" : "nav-links"}>
          <li>
            <Link
              className="link switch"
              to="/"
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link switch"
              to="/coins"
              onClick={() => setNavOpen(false)}
            >
              Coins
            </Link>
          </li>
          <li>
            <Link
              className="link switch"
              to="/stats"
              onClick={() => setNavOpen(false)}
            >
              Stats
            </Link>
          </li>
          <li>
            <Link
              className="link switch"
              to="/news"
              onClick={() => setNavOpen(false)}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className="link subscribe"
              to="/subscribe"
              onClick={() => setNavOpen(false)}
            >
              <Button
                variant="contained"
                size="small"
                sx={{ fontSize: "14px" }}
              >
                Subscribe
              </Button>
            </Link>
          </li>
        </ul>
        <div
          class="burger"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

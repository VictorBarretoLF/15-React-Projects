import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../utils/svg/logo.svg";

const navLinks = [
  {
    linkTo: "/",
    text: "home",
  },
  {
    linkTo: "/about",
    text: "about",
  },
];

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="cocktail db logo" className="logo" />
          </Link>
          <ul className="nav-links">
            {navLinks.map(({ linkTo, text }, index) => {
              return (
                <li key={index}>
                  <Link to={linkTo}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

import React, { Component } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../utils/helper-objects/navLinks";
import logo from "../utils/svg/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle">
              <FaBars />
            </button>
          </div>
          <div className="links-container show-container">
            <ul className="links">
              <li>
                <a href="#a">home</a>
              </li>
              <li>
                <a href="#a">about</a>
              </li>
              <li>
                <a href="#a">contact</a>
              </li>
              <li>
                <a href="#a">products</a>
              </li>
            </ul>
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

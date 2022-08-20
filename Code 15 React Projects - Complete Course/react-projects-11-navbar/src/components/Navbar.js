import React, { Component } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../utils/helper-objects/navLinks";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            
          </div>
          <div className="links-container show-container"></div>
          <ul className="social-icons"></ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

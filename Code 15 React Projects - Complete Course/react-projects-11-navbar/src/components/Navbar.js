import React, { Component, createRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../utils/helper-objects/navLinks";
import logo from "../utils/svg/logo.svg";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showLinks: true,
    };
    this.linksRef = createRef();
    this.linksContainerRef = createRef();
  }

  toggleLinks = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };

  componentDidUpdate = () => {
    // console.log(this.state)
    const linksHeight = this.linksRef.current.getBoundingClientRect().height;
    if (this.state.showLinks) {
      this.linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      this.linksContainerRef.current.style.height = "0px";
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={this.toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div
            className="links-container show-container"
            ref={this.linksContainerRef}
          >
            <ul className="links" ref={this.linksRef}>
              {links.map(({ id, url, text }) => {
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

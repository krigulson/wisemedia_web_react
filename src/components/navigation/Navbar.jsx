import React, { Component } from "react";
import logo from '../../wisemedia_logo.svg';
import NavbarMenu from "./NavbarMenu";

export class TopNavbar extends Component {
  render() {
    return (
      <nav className="navbar has-shadow is-spaced" aria-label="dropdown navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img src={logo} alt="BrandLogo" width="150" height="50" />
            </a>
          </div>
          <NavbarMenu />
        </div>
      </nav>
    )
  }
}

export default TopNavbar;


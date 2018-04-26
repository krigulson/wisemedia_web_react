import React, { Component } from "react";
import injectSheet from "react-jss";
import { NavLink } from "react-router-dom";
import logo from '../../wisemedia_logo.svg';
import styles from './NavbarStyles';

export class Navbar extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <nav className="navbar fixed-top">
          <BrandLogo>
            <img src={logo} alt="BrandLogo" width="200" height="50" />
          </BrandLogo>
          <ul className="navbar-nav mr-auto ml-5">
            <li className="nav-item">
              <NavLink className="nav-link" activeclass="active" to="/about-us">
                about us
              </NavLink>
            </li>
          </ul>
          { children }
      </nav>
    )
  }
}
export class BrandLogo extends Component {
  render() {
    const { children } = this.props;
    return (
      <a className="navbar-brand animated fadeInDownBig" href="/">
        {children}
      </a>
    )
  }
}

export default injectSheet(styles)(Navbar)

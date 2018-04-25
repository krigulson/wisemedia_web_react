import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from './NavbarStyles';
import { NavLink } from "react-router-dom";
import logo from '../../wisemedia_logo.svg';

export class Navbar extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <BrandLogo>
              <img src={logo} alt="BrandLogo" width="200" height="50" />
            </BrandLogo>
          </div>
          <NavLink className="btn btn-outline-dark float-right" activeclass="active" to="/about-us">About us</NavLink>
        </div>
      </nav>
    )
  }
}
export class BrandLogo extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <a className="navbar-brand animated fadeInDownBig" href="/">
        {children}
      </a>
    )
  }
}

export default injectSheet(styles)(Navbar);

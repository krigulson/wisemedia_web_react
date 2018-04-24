import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            {this.props.children}
          </div>
          <NavLink className="btn btn-outline-dark float-right" activeclass="active" to="/about-us">About us</NavLink>
        </div>
      </nav>
    )
  }
}
export class BrandLogo extends Component {
  render() {
    return (
      <a className="navbar-brand animated fadeInDownBig" href="/">
        {this.props.children}
      </a>
    )
  }
}

import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {this.props.children}
      </nav>
    )
  }
}
export class BrandLogo extends Component {
  render() {
    return (
      <a className="navbar-brand" href="/">
        {this.props.children}
      </a>
    )
  }
}

import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="background-image"></div>
        <div className="overlay"></div>
        {this.props.children}
      </header>
    )
  }
}

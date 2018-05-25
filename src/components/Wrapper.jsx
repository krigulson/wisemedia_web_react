import React, { Component } from "react";

export class Container extends Component {
  render() {
    return(
      <div className="container">
        { this.props.children }
      </div>
    )
  }
}

export class ContainerFluid extends Component {
  render() {
    return(
      <div className="container-fluid">
        { this.props.children }
      </div>
    )
  }
}

export class Row extends Component {
  render() {
    return(
      <div className="row">
        { this.props.children }
      </div>
    )
  }
}

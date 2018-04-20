import React, { Component } from "react";

export class PrimaryButton extends Component {
  render() {
    return(
      <button className="btn btn-primary">
        { this.props.children }
      </button>
    )
  }
}

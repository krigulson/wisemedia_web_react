import React, { Component } from "react";
import { ContainerFluid } from "../components/Wrapper";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ContainerFluid>
          {this.props.children}
        </ContainerFluid>
      </footer>
    )
  }
}

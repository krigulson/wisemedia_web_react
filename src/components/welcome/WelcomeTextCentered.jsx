import React, { Component } from "react";
import { WelcomeText } from "./WelcomeText";

export class WelcomeTextCentered extends Component {
  render() {
    return (
      <section className={this.props.heroClasses}>
        <div className="hero-body">
          <div className="container">
            <WelcomeText />
          </div>
        </div>
      </section>
    )
  }
}

import React, { Component } from "react";
import { ContainerFluid, Row } from "../components/Wrapper";

export class WelcomeText extends Component {
  render() {
    return (
      <section>
        <ContainerFluid>
          <Row>
            <div className="col-md-12">
              <h1 className="hello animated fadeInUpBig">{this.props.text}</h1>
            </div>
          </Row>
        </ContainerFluid>
      </section>
    )
  }
}

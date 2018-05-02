import React, { Component } from "react";
import injectSheet from "react-jss";
import { ContainerFluid, Row } from "../Wrapper";
import styles from './WelcomeTextStyles';

export class WelcomeText extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section>
        <ContainerFluid>
          <Row>
            <div className="col-md-12">
              <h1 className={classes.hello}>{this.props.text}</h1>
            </div>
          </Row>
        </ContainerFluid>
      </section>
    )
  }
}

export default injectSheet(styles)(WelcomeText);

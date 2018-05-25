import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from './WelcomeTextStyles';
import CenteredBox from "../centered_box/CenteredBox";

export class WelcomeText extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CenteredBox>
        <h1 className={classes.hello}>{this.props.text}</h1>
      </CenteredBox>
    )
  }
}

export default injectSheet(styles)(WelcomeText);

import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from './WelcomeTextStyles';
import classNames from 'classnames';

export class WelcomeText extends Component {
  render() {
    const { classes } = this.props;
    const textClasses = classNames([
      classes.hello
    ]);
    return (
      <h1 className={textClasses}>
        {this.props.text}
      </h1>
    )
  }
}

export default injectSheet(styles)(WelcomeText);

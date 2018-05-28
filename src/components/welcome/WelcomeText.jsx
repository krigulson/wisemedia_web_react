import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from './WelcomeTextStyles';

export class WelcomeText extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={this.props.heroClasses}>
        <div className="hero-body">
          <div className="container">
            <div className={classes.hello}>
              {this.props.text}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default injectSheet(styles)(WelcomeText);

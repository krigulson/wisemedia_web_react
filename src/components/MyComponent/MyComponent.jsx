import React, { Component } from "react";
import injectSheet from "react-jss";
import { ContainerFluid } from "../Wrapper";
import styles from './MyComponentStyles';

class MyComponent extends Component {
  render () {
    const { children, classes } = this.props;
    return (
      <ContainerFluid>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Hello React-JSS!</h1>
          {children}
        </div>
      </ContainerFluid>
    );
  }
}

export default injectSheet(styles)(MyComponent);

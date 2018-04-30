import React, { Component } from "react";
import injectSheet from "react-jss";
import { ContainerFluid } from "../../components/Wrapper";
import styles from "./FooterStyles";

export class Footer extends Component {
  render() {
    const { children, classes } = this.props
    return (
      <footer className={classes.footer}>
        <ContainerFluid>
          { children }
        </ContainerFluid>
      </footer>
    )
  }
}

export default injectSheet(styles)(Footer);

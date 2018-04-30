import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from './BgImageStyles';

export class BgImage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.bgimage}></div>
    )
  }
}

export default injectSheet(styles)(BgImage);

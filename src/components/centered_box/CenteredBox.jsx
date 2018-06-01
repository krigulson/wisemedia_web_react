import React, {Component} from 'react';
import injectSheet from "react-jss";
import styles from './CenteredBoxStyles';

export class CenteredBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.centeredBoxContainer}>
        <div className={classes.box}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(CenteredBox);

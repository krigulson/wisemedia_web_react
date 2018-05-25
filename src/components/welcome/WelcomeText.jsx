import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from './WelcomeTextStyles';
import CenteredBox from "../centered_box/CenteredBox";
import { Hero, Container, Heading } from 'react-bulma-components';

export class WelcomeText extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Hero color={this.props.color}>
          <Hero.Body>
            <Container>
              <Heading className={classes.hello}>
                {this.props.text}
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </div>

    )
  }
}

export default injectSheet(styles)(WelcomeText);

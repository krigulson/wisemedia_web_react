import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./FooterStyles";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faBuilding from '@fortawesome/fontawesome-free-solid/faBuilding'
import faAt from '@fortawesome/fontawesome-free-solid/faAt'
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark'

export class Foot extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className="footer">
        <div className="container">
          <div className={classes.footerLinks}>
            <div className="columns">
              <div className="column">
                  <p className={classes.footerLinkTitle}>
                    Contact
                  </p>
                  <p className={classes.footerLink}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    Soola 3, Tartu
                  </p>
                  <p className={classes.footerLink}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faAt} />
                    </span>
                    <a href="mailto:star@wisemedia.ee">star@wisemedia.ee</a>
                  </p>
                  <p className={classes.footerLink}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <a href="tel:+37256907015">+372 5670 7015</a>
                  </p>
                  <p className={classes.footerLink}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faBookmark} />
                    </span>
                    <a href="http://www.wisemedia.ee">www.wisemedia.ee</a>
                  </p>
              </div>
                  {/* <li>Soola 3, Tartu</li>
                  <li><a href="mailto:star@wisemedia.ee">star@wisemedia.ee</a></li>
                  <li><a href="tel:+37256907015">+372 5670 7015</a></li>
                  <li><a href="http://www.wisemedia.ee">www.wisemedia.ee</a></li> */}
              <div className="column"></div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default injectSheet(styles)(Foot);

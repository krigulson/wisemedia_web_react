import React, { Component } from "react";
import FlagIcon from "../FlagIcon";
import { I18n } from 'react-i18next';
import i18n from '../../i18n';
import { Navbar } from 'react-bulma-components';
import injectSheet from "react-jss";
import styles from "./NavbarStyles";

export class NavbarMenu extends Component {
  render() {
    const toggle = (lng) => i18n.changeLanguage(lng);
    const codes = {
      germany: 'de',
      english: 'us',
      estonian: 'ee'
    };
    const sizes = { default: 'lg' };
    return (
      <I18n>
        {
          (t) => {
            return (
              <Navbar.Menu>
                <Navbar.Container>
                  <Navbar.Item href="/about-us">
                      {t('about_us')}
                  </Navbar.Item>
                  <Navbar.Item href="/where-i-am">
                      {t('where i am')}
                  </Navbar.Item>
                  <Navbar.Item href="/blog">
                      {t('blog')}
                  </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                  <Navbar.Item hoverable>
                    <Navbar.Link>
                      Choose language
                    </Navbar.Link>
                    <Navbar.Dropdown right boxed>
                      <Navbar.Item onClick={() => toggle('de')}>
                        <FlagIcon code={codes.germany} size={sizes.default} />
                      </Navbar.Item>
                      <Navbar.Item onClick={() => toggle('us')}>
                        <FlagIcon code={codes.english} size={sizes.default} />
                      </Navbar.Item>
                    </Navbar.Dropdown>
                  </Navbar.Item>
                </Navbar.Container>
              </Navbar.Menu>
            )

          }
        }
      </I18n>
    )
  }
}

export default injectSheet(styles)(NavbarMenu);

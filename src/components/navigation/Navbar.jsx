import React, { Component } from "react";
import logo from '../../wisemedia_logo.svg';
import NavbarMenu from "./NavbarMenu";
import LanguageButtons from "../language/LanguageButtons";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

export class TopNavbar extends Component {
  render() {
    return (
      <nav className="navbar has-shadow is-spaced" aria-label="dropdown navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img src={logo} alt="BrandLogo" width="150" height="50" />
            </a>
            <div className="navbar-item is-hidden-desktop">
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <span className="icon"><FontAwesomeIcon icon={faGlobe} size={'lg'} /></span>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <LanguageButtons />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a role="button" className="navbar-burger"
               data-target="navMenu"
               aria-label="menu"
               aria-expanded="false"
              onClick={() => {document.querySelector('.navbar-menu').classList.toggle('is-active');}}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <NavbarMenu />
        </div>
      </nav>
    )
  }
}

export default TopNavbar;


import React, { Component } from "react";
import { Navbar, Container } from 'react-bulma-components';
import BrandLogo from "../brand_logo/BrandLogo";
import logo from '../../wisemedia_logo.svg';
import NavbarMenu from "./NavbarMenu";


export class TopNavbar extends Component {
  render() {
    return (
      <Container breakpoint="fullhd">
        <Navbar>
          <Navbar.Brand>
            <BrandLogo>
              <img src={logo} alt="BrandLogo" width="150" height="50" />
            </BrandLogo>
            <Navbar.Burger />
          </Navbar.Brand>
          <NavbarMenu />
        </Navbar>
      </Container>

      // <I18n>
      //   {
      //     (t) => {
      //       return (
      //         <nav className="navbar fixed-top">
      //             <BrandLogo>
      //               <img src={logo} alt="BrandLogo" width="200" height="50" />
      //             </BrandLogo>
      //             <ul className="navbar-nav ml-auto ml-5 flex-row">
      //               <li className="nav-item mr-4">
      //                 <NavLink className={classes.navLink} activeclass="kala" to="/about-us">
      //                   {t('about_us')}
      //                 </NavLink>
      //               </li>
      //               <li className="nav-item mr-4">
      //                 <NavLink className={classes.navLink} activeclass="active" to="/where-i-am">
      //                   {t('where_i_am')}
      //                 </NavLink>
      //               </li>
      //               <li className="nav-item mr-4">
      //                 <NavLink className={classes.navLink} activeclass="active" to="/blog">
      //                   {t('blog')}
      //                 </NavLink>
      //               </li>
      //             </ul>
      //             <a className="btn" onClick={() => toggle('de')}>
      //               <FlagIcon code={codes.germany} size={sizes.default} />
      //             </a>
      //             <a className="btn" onClick={() => toggle('en')}>
      //               <FlagIcon code={codes.english} size={sizes.default} />
      //             </a>
      //         </nav>
      //       )
      //     }
      //   }
      // </I18n>
    )
  }
}

export default TopNavbar;


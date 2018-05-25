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
    )
  }
}

export default TopNavbar;


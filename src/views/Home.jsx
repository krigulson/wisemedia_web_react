import React, { Component } from "react";
import { Navbar, BrandLogo} from "../components/Navbar";
import logo from '../wisemedia_logo.svg';

export default class Home extends Component {
  render() {
    return (
      <Navbar>
        <BrandLogo>
          <img src={logo} alt="BrandLogo" width="200" height="50"/>
        </BrandLogo>
      </Navbar>
    )
  }
}

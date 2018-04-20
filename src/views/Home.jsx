import React, { Component } from "react";
import { Navbar, BrandLogo} from "../components/Navbar";
import logo from '../logo.svg';

export default class Home extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <BrandLogo>
            <img src={logo} alt="BrandLogo" width="50" height="50"/>
          </BrandLogo>
        </Navbar>
      </header>
    )
  }
}

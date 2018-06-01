import React, {Component} from 'react';

export class BrandLogo extends Component {
  render() {
    const { children } = this.props;
    return (
      <a className="navbar-brand animated fadeInDownBig" href="/">
        {children}
      </a>
    )
  }
}

export default BrandLogo;

import React, { Component } from 'react';
import TopNavbar from '../components/navigation/Navbar';
import Foot from '../components/foot/foot';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <main>
          {this.props.children}
        </main>
        <Foot />
      </div>
    );
  }
}
export default MainLayout;

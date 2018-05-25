import React, { Component } from 'react';
import TopNavbar from '../components/navigation/Navbar';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;

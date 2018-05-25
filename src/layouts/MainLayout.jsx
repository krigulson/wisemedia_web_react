import React, { Component } from 'react';
import Navbar from '../components/navigation/Navbar';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;

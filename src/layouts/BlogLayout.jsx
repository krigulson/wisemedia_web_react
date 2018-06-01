import React, { Component } from 'react';
import Navbar from '../components/navigation/Navbar';
class BlogLayout extends Component {
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
export default BlogLayout;

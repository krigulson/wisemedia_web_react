import React, { Component } from 'react';
import Navbar from '../components/navigation/Navbar';
import Foot from '../components/foot/foot';
class BlogLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          {this.props.children}
        </main>
        <Foot />
      </div>
    );
  }
}
export default BlogLayout;

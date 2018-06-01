import React, { Component } from 'react';
import Foot from '../components/foot/foot';

class SquirrelTestAssignment extends Component {
  render() {
    return (
      <div>
        <main>
          {this.props.children}
        </main>
        <Foot />
      </div>
    );
  }
}
export default SquirrelTestAssignment;

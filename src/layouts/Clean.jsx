import React, { Component } from 'react';

class SquirrelTestAssignment extends Component {
  render() {
    return (
      <div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default SquirrelTestAssignment;

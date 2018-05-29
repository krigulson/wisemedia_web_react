import React, { Component } from 'react';

export class PricingTable extends Component {
  render () {
    return (
      <div className="pricing-table">
        { this.props.children }
      </div>
    )
  }
}

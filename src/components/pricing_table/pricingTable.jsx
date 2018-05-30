import React, { Component } from 'react';
import classNames from 'classnames';

export class PricingTable extends Component {
  render () {
    const pricingTableClasses = classNames([
      'pricing-table',
      this.props.isComparative
    ]);
    return (
      <div className={pricingTableClasses}>
        { this.props.children }
      </div>
    )
  }
}

import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export class PricingPlan extends Component {
  render () {
    const { planItems = [] } = this.props;
    const icon = this.props.icon;
    const isSpinning = this.props.isSpinning;
    const iconClasses = classNames([
      'icon',
      this.props.iconColor
    ])
    const pricingPlanClasses = classNames([
      'pricing-plan',
      this.props.planClasses
    ]);
    return (
      <div className={pricingPlanClasses}>
        <div className="plan-header">{this.props.planHeader}</div>
        <div className="plan-price">
          <span className={iconClasses}>
            <FontAwesomeIcon icon={icon} size={'5x'} spin={isSpinning} />
          </span>
        </div>
        <div className="plan-items">
          { planItems.map((item) => {
            return(
              <div className="plan-item">{ item }</div>
            )
          })}
        </div>
        <div className="plan-footer">
          <button className="button is-fullwidth">Choose</button>
        </div>
      </div>
    )
  }
}

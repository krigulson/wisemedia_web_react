import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export class PricingPlan extends Component {
  render () {
    const { planItems = [] } = this.props;
    const icon = this.props.icon;
    const iconSize = this.props.iconSize;
    const isSpinning = this.props.isSpinning;
    const iconClasses = classNames([
      'icon',
      this.props.iconColor
    ])
    const pricingPlanClasses = classNames([
      'pricing-plan',
      this.props.planClasses,
      this.props.isFeatures
    ]);
    return (
      <div className={pricingPlanClasses}>
        <div className="plan-header">{this.props.planHeader}</div>
        <div className="plan-price">
          <span className={iconClasses}>
            <FontAwesomeIcon icon={icon} size={iconSize} spin={isSpinning} />
          </span>
        </div>
        <div className="plan-items">
          { planItems.map((item, uniqueId) => {
            return(
              <div className="plan-item" key={uniqueId} >{ item }</div>
            )
          })}
        </div>
      </div>
    )
  }
}

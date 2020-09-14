import React from 'react';
import SummarySection from './SummarySection';
import Total from './Total';

export default class Price extends React.Component {
    render() {
  
      const cart = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
  
        return (
          <SummarySection
            featureHash={featureHash}
            feature={feature}
            selectedOption={selectedOption}
            USCurrencyFormat={this.props.USCurrencyFormat}
          />
        )
      })
  
      return (
        <>
          <h2>Your cart</h2>
          {cart}
          <Total
            USCurrencyFormat={this.props.USCurrencyFormat}
            selected={this.props.selected}
          />
        </>
      )
    }
  }
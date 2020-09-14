import React from 'react';
import Item from './Item';

export default class Form extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <Item
          featureHash={featureHash}
          feature={feature}
          featureOption={this.props.features[feature]}
          selectedFeature={this.props.selected[feature]}
          updateFeature={(feature, newValue) => this.props.updateFeature(feature, newValue)}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      )
    })

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}
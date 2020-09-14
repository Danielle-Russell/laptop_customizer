import React from "react";
import "./App.css";
import FEATURES from "./FEATURES";
import Headings from "./Headings";
import Form from "./Form";
import Price from "./Price";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class App extends React.Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <Headings />
        <main>
          <Form
            USCurrencyFormat={USCurrencyFormat}
            selected={this.state.selected}
            features={FEATURES}
            updateFeature={(feature, newValue) =>
              this.updateFeature(feature, newValue)
            }
          />
          <section className="main__summary">
            <Price
              USCurrencyFormat={USCurrencyFormat}
              selected={this.state.selected}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

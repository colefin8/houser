import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";

class StepOne extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Property Name"
          name="name"
          value={this.state.name}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="Address"
          name="address"
          value={this.state.address}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="City"
          name="city"
          value={this.state.city}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="State"
          name="state"
          value={this.state.state}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="Zip Code"
          name="zip"
          value={this.state.zip}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <Link to="/wizard/step2">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default StepOne;

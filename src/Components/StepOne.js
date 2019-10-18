import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateStore } from "../store";

class StepOne extends Component {
  componentDidMount() {
    this.props.updateStore();
  }

  handleChange = event => {
    this.props.updateStore({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Property Name"
          name="name"
          value={this.props.name}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="Address"
          name="address"
          value={this.props.address}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="City"
          name="city"
          value={this.props.city}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="State"
          name="state"
          value={this.props.state}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="Zip Code"
          name="zip"
          value={this.props.zip}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <Link to="/wizard/step2">
          <button
            onClick={() => {
              console.log(this.props);
              this.props.updateStore({ ...this.props });
            }}
          >
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ...reduxState
  };
};

const mapDispatchToProps = {
  updateStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepOne);

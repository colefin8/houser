import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          placeholder="image url"
          name="img"
          value={this.state.name}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <div>
          <Link to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default StepTwo;

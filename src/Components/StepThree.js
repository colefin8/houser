import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ""
    };
  }

  // addHouse = () => {
  //     const { name, address, city, state, zip, img, mortgage, rent } = this.state;
  //     axios
  //       .post("/api/houses", {
  //         name,
  //         address,
  //         city,
  //         state,
  //         zip,
  //         img,
  //         mortgage,
  //         rent
  //       })
  //       .then(() => window.location.replace("/"));
  //   };
  // }

  render() {
    return (
      <div>
        <input
          placeholder="monthly mortgage amount"
          name="img"
          value={this.state.name}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="desired rent amount"
          name="img"
          value={this.state.name}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <div>
          <Link to="/wizard/step2">
            <button>Previous Step</button>
          </Link>
          <button>Complete</button>
        </div>
      </div>
    );
  }
}

export default StepThree;

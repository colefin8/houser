import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";

class Wizard extends Component {
  render() {
    return (
      <div>
        Wizard
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2/" />
          <Route component={StepThree} path="/wizard/step3" />
        </Switch>
      </div>
    );
  }
}

export default Wizard;

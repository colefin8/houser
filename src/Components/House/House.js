import React, { Component } from "react";

class House extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.deleteHouse(this.props.id)}>X</button>
        <h1>{this.props.name}</h1>
        <p>{`Address: ${this.props.address}`}</p>
        <p>{`City: ${this.props.city}`}</p>
        <p>{`State: ${this.props.state}`}</p>
        <p>{`Zip: ${this.props.zip}`}</p>
      </div>
    );
  }
}

export default House;

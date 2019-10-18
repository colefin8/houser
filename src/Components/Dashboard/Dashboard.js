import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    this.getHouses();
  }

  deleteHouse = id => {
    axios.delete(`/api/houses/${id}`).then(() => {
      this.getHouses();
    });
  };

  getHouses = () => {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        Dashboard
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {this.state.houses.map((e, i) => {
          return (
            <House
              deleteHouse={this.deleteHouse}
              key={`housekey${i}`}
              id={e.id}
              name={e.name}
              address={e.address}
              img={e.img}
              mortgage={e.mortgage}
              rent={e.rent}
              state={e.state}
              zip={e.zip}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;

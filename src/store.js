import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: "",
  rent: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default createStore(reducer);

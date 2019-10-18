import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { HashRouter } from "react-router-dom";
import Routes from "./routes.js";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;

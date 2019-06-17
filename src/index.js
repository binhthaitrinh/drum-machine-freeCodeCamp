import React from "react";
import ReactDOM from "react-dom";
import Pads from "./components/Pads";
import Controller from "./components/Controller";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Pads />
      <Controller />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

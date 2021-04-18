import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useConfirm from "./module/useConfirm";
import useBeforeLeave from "./module/useBeforeLeave";

const App = () => {
  const begForLife = () => {
    console.log("Pls dont leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

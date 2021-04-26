import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useNetwork from "./module/useNetwork";

const App = () => {
  const handleNetwork = onLine => {
    console.log(onLine ? "online" : "offline");
  }
  const onLine  = useNetwork(handleNetwork);
console.log(navigator.onLine);
  return (
    <div className="App">
      <h1>{ onLine ? "Online" : "Offline" }</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

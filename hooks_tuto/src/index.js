import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useConfirm from "./module/useConfirm";
import usePreventLeave from "./module/usePreventLeave";

const App = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

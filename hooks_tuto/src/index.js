import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useNotification from "./module/useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I st?", { body: "yeahp" });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

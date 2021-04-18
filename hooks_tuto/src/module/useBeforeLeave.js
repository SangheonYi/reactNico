import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    if (typeof onBefore === "function")
      document.addEventListener("mouseleave", handle);
    if (typeof onBefore === "function")
      return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default useBeforeLeave;

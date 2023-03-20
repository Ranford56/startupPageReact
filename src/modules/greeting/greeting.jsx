import React from "react";
import Time from "./time";
import Hello from "./hello";

const Greeting = () => {
  return (
    <div className="time">
      <Hello></Hello>
      <Time></Time>
    </div>
  );
};

export default Greeting;

import React from "react";
import Time from "./time";
import Hello from "./hello";

const Greeting = () => {
  return (
    <div className="offset-2 col-8">
      <Hello></Hello>
      <Time></Time>
    </div>
  );
};

export default Greeting;

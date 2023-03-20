import React from "react";
import Greeting from "./modules/greeting/greeting";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="d-flex align-items-center vh-100">
      <Greeting></Greeting>
    </div>
  );
};

export default App;

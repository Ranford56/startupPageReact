import React from "react";
import Greeting from "./modules/greeting/greeting";
import Input from "./modules/input/input";
import LinkGroup from "./modules/linkGroup/linkGroup";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="main-container">
      <Greeting></Greeting>
      <Input></Input>
      <LinkGroup></LinkGroup>
    </div>
  );
};

export default App;

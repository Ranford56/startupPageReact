import React, { useState } from "react";

const Input = () => {
  return (
    <div className="searchbox">
      <form className="formu" id="form" action="/">
        <div className="searchDiv">
          <input
            type="text"
            placeholder=">"
            className="search"
            name="q"
            id="search"
            autoFocus={true}
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default Input;

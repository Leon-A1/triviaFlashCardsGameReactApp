import React from "react";
import spinner from "./spinner.gif";

const Spinner = (CardsLoaing) => {
  return (
    <img
      src={spinner}
      style={{ width: "100px", margin: "auto", display: CardsLoaing }}
      alt="Loading"
    />
  );
};

export default Spinner;

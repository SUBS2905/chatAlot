import React from "react";
import { Link } from "react-router-dom";

const UnderDev = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-a-Lot</span>
        <span style={{ color: "#d7403a" }} className="title">
          Feature under development!
        </span>
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    </div>
  );
};

export default UnderDev;

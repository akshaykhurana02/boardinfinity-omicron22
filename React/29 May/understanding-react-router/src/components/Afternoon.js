import React from "react";
import { Link } from "react-router-dom";

const Afternoon = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "orange" }}>Good Afternoon!</h1>
      <br />
      <Link to="/evening">Go to Evening!</Link>
    </div>
  );
};

export default Afternoon;

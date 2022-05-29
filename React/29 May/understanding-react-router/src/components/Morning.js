import React from "react";
import { Link } from "react-router-dom";

const Morning = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "cyan" }}>Good Morning!</h1>
      <br />
      <Link to="/afternoon">Go to Afternoon!</Link>
    </div>
  );
};

export default Morning;

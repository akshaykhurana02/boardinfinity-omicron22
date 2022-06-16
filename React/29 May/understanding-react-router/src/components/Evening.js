import React from "react";
import { Link } from "react-router-dom";

const Evening = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "lightgreen" }}>Good Evening!</h1>
      <br />
      <Link to="/night">Go to Night!</Link>
    </div>
  );
};

export default Evening;

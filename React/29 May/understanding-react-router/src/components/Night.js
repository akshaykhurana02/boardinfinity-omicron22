import React from "react";
import { Link } from "react-router-dom";

const Night = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "grey" }}>Good Night!</h1>
      <br />
      <Link to="/morning">Go to Morning!</Link>
    </div>
  );
};

export default Night;

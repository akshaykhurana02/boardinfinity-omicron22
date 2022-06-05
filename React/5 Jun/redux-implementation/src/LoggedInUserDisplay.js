import React from "react";
import { useSelector } from "react-redux";

const LoggedInUserDisplay = () => {
  const loggedUser = useSelector((state) => state.loggedInUser);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      Hi, {loggedUser}
    </div>
  );
};

export default LoggedInUserDisplay;

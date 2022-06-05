import React from "react";
import WinnerContext from "../contexts/WinnerContext";

const Winner = () => {
  return (
    <div>
      <WinnerContext.Consumer>
        {(winner) => {
          return (
            <div>
              Winner : <span style={{ color: "orange" }}> {winner}</span>
            </div>
          );
        }}
      </WinnerContext.Consumer>
    </div>
  );
};

export default Winner;

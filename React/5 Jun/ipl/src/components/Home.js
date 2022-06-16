import React, { useState } from "react";
import csk_logo from "../images/teams_logo/csk.jpeg";
import dc_logo from "../images/teams_logo/dc.jpeg";
import gt_logo from "../images/teams_logo/gt.png";
import kkr_logo from "../images/teams_logo/kkr.jpeg";
import lsg_logo from "../images/teams_logo/lsg.webp";
import WinnerContext from "../contexts/WinnerContext";
import Winners from "./Winners";

const App = () => {
  const [winner, setWinner] = useState("Chennai Super Kings");

  return (
    <div className="ui container">
      <div>
        Select a winner:
        <br />
        <br />
        <div>
          <img
            style={{ height: "40px" }}
            src={csk_logo}
            onClick={() => setWinner("Chennai Super Kings")}
          />
          <img
            style={{ height: "40px" }}
            src={dc_logo}
            onClick={() => setWinner("Delhi Capitals")}
          />
          <img
            style={{ height: "40px" }}
            src={gt_logo}
            onClick={() => setWinner("Gujarat Titans")}
          />
          <img
            style={{ height: "40px" }}
            src={kkr_logo}
            onClick={() => setWinner("Kolkata Knight Riders")}
          />
          <img
            style={{ height: "40px" }}
            src={lsg_logo}
            onClick={() => setWinner("Lucknow Super Giants")}
          />
        </div>
        <br />
        <br />
        <WinnerContext.Provider value={winner}>
          <Winners />
        </WinnerContext.Provider>
      </div>
    </div>
  );
};

export default App;

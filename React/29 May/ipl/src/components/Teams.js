import React from "react";
import csk_logo from "../images/teams_logo/csk.jpeg";
import dc_logo from "../images/teams_logo/dc.jpeg";
import gt_logo from "../images/teams_logo/gt.png";
import kkr_logo from "../images/teams_logo/kkr.jpeg";
import lsg_logo from "../images/teams_logo/lsg.webp";
import IndividualTeam from "./IndividualTeam";

const Teams = () => {
  return (
    <>
      <div style={{ marginTop: "10px" }} class="ui three column grid">
        <div class="column">
          <IndividualTeam
            teamColor="yellow"
            teamLogo={csk_logo}
            teamId="1"
            teamName="Chennai Super Kings"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamColor="blue"
            teamLogo={dc_logo}
            teamId="2"
            teamName="Delhi Capitals"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamColor="black"
            teamLogo={gt_logo}
            teamId="3"
            teamName="Gujarat Titans"
          />
        </div>
      </div>
      <div class="ui three column grid">
        <div class="column">
          <IndividualTeam
            teamColor="purple"
            teamLogo={kkr_logo}
            teamId="4"
            teamName="Kolkata Knight Riders"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamLogo={lsg_logo}
            teamId="5"
            teamName="Lucknow Super Giants"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamLogo={csk_logo}
            teamId="6"
            teamName="Mumbai Indians"
          />
        </div>
      </div>
      <div class="ui three column grid">
        <div class="column">
          <IndividualTeam
            teamLogo={csk_logo}
            teamId="7"
            teamName="Punjab Kings"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamLogo={csk_logo}
            teamId="8"
            teamName="Rajasthan Royals"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamLogo={csk_logo}
            teamId="9"
            teamName="Royal Challengers Bangalore"
          />
        </div>
      </div>
      <div class="ui three column grid">
        <div class="column">
          <IndividualTeam
            teamLogo={csk_logo}
            teamId="10"
            teamName="Sunrisers Hyderabad"
          />
        </div>
      </div>
    </>
  );
};

export default Teams;

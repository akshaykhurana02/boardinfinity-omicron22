import React from "react";

const IndividualTeam = (props) => {
  return (
    <div class={`ui fluid ${props.teamColor} card`}>
      <div class="image">
        <img
          style={{ height: "200px", display: "flex", justifyContent: "center" }}
          src={props.teamLogo}
          alt={props.teamId}
        />
      </div>
      <div class="content">
        <span
          style={{ display: "flex", justifyContent: "center", color: "navy" }}
        >
          {props.teamName}
        </span>
      </div>
    </div>
  );
};

export default IndividualTeam;

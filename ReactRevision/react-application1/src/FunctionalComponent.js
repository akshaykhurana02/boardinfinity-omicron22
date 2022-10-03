import React, { useState } from "react";

const FunctionalComponent = (props) => {
  const [colour, setColour] = useState("orange"); // Here "black" is the default value of the state colour
  const [greeting, setGreeting] = useState("Bye");

  /* 
    Here,
    colour -> value of state
    setColour -> function to update the value  
  */

  function updateStateValues() {
    setColour("pink");
    setGreeting("Au Revoir");
  }

  return (
    <h1 style={{ color: colour }} onClick={() => updateStateValues()}>
      {greeting}, {props.name}.
    </h1>
  );
  
};

export default FunctionalComponent;

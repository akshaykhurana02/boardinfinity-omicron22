import React, { useState } from "react";

const UseStateComponent = () => {

  const [currentCountrySelected, setCurrentCountry] = useState("India");

  return (
    <div>
      I love {currentCountrySelected}!
      <br />
      <br />
      <button
        style={{ margin: "5px" }}
        onClick={() => setCurrentCountry("India")} // Here setCurrentCountry is a setter function, which is used to update the value of the state
      >
        India
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => setCurrentCountry("Australia")}
      >
        Australia
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => setCurrentCountry("Ukraine")}
      >
        Ukraine
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => setCurrentCountry("South Africa")}
      >
        South Africa
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => setCurrentCountry("Canada")}
      >
        Canada
      </button>
    </div>
  );
};

export default UseStateComponent;

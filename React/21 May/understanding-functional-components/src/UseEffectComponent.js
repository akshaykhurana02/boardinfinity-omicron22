import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [currentCountrySelected, setCurrentCountry] = useState("India");
  const [firstName, setFirstName] = useState("Akshay");
  const [lastName, setLastName] = useState("Khurana");

  // useEffect Hook Implementation

  /* Case 1 -> Dependency Array is not present
    It will be called on every render!
  */

  //   useEffect(() => {
  //     console.log("render()");
  //   });

  /* Case 2 -> Dependency Array is present but it is empty
    It will be called on the first mount OR It will behave like componentDidMount
    OR
    It will be called on the very first Render


    This is used when we want to initialise some data/state or call an API before the first Render
  */

  //   useEffect(() => {
  //     console.log("componentDidMount()");
  //   }, []); // Here [] is Dependency Array

  /* Case 3 -> Dependency Array is present, and has some value/condition present
    It will be called on selective OR It will behave like shouldComponentUpdate
    
    This will be called on first render and only if currentCountrySelected state is updated
  */

  useEffect(() => {
    console.log("shouldComponentUpdate()");
  }, [currentCountrySelected, firstName]);

  return (
    <div>
      <span>
        My name is {firstName} {lastName}{" "}
      </span>
      <br />
      <br />
      <span>I love {currentCountrySelected}! </span>
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
        onClick={() => setFirstName("South Africa")}
      >
        South Africa
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => setLastName("Canada")}
      >
        Canada
      </button>
    </div>
  );
};

export default UseEffectComponent;

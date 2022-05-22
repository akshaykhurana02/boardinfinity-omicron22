import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [currentCountrySelected, setCurrentCountry] = useState("India");
  /*
  Alternate Method -

  const useStateArray = useState("India");
  const currentCountrySelected = useStateArray[0];
  const setCurrentCountry = useStateArray[1];
  console.log(useStateArray);
  */

  const [firstName, setFirstName] = useState("Akshay");
  const [lastName, setLastName] = useState("Khurana");

  // console.log("Component Rendered!"); // This will be called on every render

  // useEffect Hook Implementation

  /* Case 1 -> Dependency Array is not present
    It will be called on every render!
  */

  // useEffect(() => {
  //   console.log("I will be called on every render!");
  // });

  /* Case 2 -> Dependency Array is present but it is empty
    It will be called on the first mount (It will behave like componentDidMount)
    OR
    It will be called on the very first Render (When the component renders for the first time only)

    This is used when we want to initialise some data/state or call an API before the first Render
  */

  // useEffect(() => {
  //   console.log("I will be called only on the first render!");
  // }, []); // Here [] is Dependency Array

  /* Case 3 -> Dependency Array is present, and has some value/condition present
    It will be called on selective OR It will behave like shouldComponentUpdate
    
    This will be called on first render and only if currentCountrySelected state is updated
  */

  useEffect(() => {
    console.log(
      "I will be called on first time and when the Country Changes or Last Name Changes!"
    );
  }, [currentCountrySelected, lastName]);

  return (
    <div>
      <span>
        My name is {firstName} {lastName}{" "}
      </span>
      <br />
      <br />
      <button
        style={{ margin: "5px" }}
        onClick={() => setFirstName("Alia")}
      >
        Change First Name
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => setLastName("Bhatt")}
      >
        Change Last Name
      </button>
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

export default UseEffectComponent;

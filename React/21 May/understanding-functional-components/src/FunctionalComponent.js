import React, { useState } from "react";

const FunctionalComponent = (props) => {

  // useState Hook
  const [counter, setCounter] = useState(0); // Number
  const [firstName, setFirstName] = useState('Akshay'); // String
  const [lastName, setLastName] = useState('Khurana'); // String

  /*
    
    counter -> state value
    setCounter -> Function to update the state
    Here 0 is the initial value of the state

  */

  return (
    <div>
      This is a Functional Component.
      <br />
      <span>Prop value is : {props.propName}</span>
      <br />
      <button onClick={() => setCounter(counter + 1)}> Click Me! </button>
      <br />
      <span>Counter : {counter} </span>
      <br/>
      My Name is : {firstName} {lastName}
    </div>
  );
};

export default FunctionalComponent;

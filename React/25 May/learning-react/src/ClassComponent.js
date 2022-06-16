import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";
import "./App.css";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <ButtonComponent
          label="Click Me!" /*  Here label is a prop or property */
          background="green"
          isDisabled={true}
        />
        <ButtonComponent label="Sign In" />
        <ButtonComponent label="Sign Up" />
        <ButtonComponent />
        <ButtonComponent label="ABC" />
      </div>
    );
  }
}

export default ClassComponent;

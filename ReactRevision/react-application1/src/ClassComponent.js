// Class Component

import { Component } from "react";

class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "black", greeting: "Hello" }; // Default State
  }

  colorPicker() {
    let randomNumber = Math.ceil(Math.random() * 10);
    let randomColour = "";
    switch (randomNumber) {
      case (1, 2, 3):
        randomColour = "red";
        break;
      case (4, 5, 6):
        randomColour = "blue";
        break;
      case (7, 8, 9):
        randomColour = "green";
        break;
      default:
        randomColour = "pink";
        break;
    }
    this.setState({ color: randomColour, greeting: "Bonjour" });
  }
  // Benefits of State

  /*
        We can control the components
        Can add dynamic effect
  */

  render() {
    return (
      <h1
        style={{ color: this.state.color }}
        onClick={() => this.colorPicker()} // State Updation
      >
        {this.state.greeting}, {this.props.name}.
      </h1>
    );
  }
}

export default ClassComponents;

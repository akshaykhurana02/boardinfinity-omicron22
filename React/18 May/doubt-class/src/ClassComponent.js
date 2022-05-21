import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { backgroundColor: "blue" }; // Inital State
  }

  handleBackgroundColourChange = () => {
    // this.state = { backgroundColor: "pink" };
    this.setState({ backgroundColor: "orange" }); // this.setState is used for updating the state
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.backgroundColor }}
        onClick={this.handleBackgroundColourChange}
      >
        Class Component
      </div>
    );
  }
}

export default ClassComponent;

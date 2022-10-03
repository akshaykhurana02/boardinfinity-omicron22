import React from "react";
import InnerComponent from "./InnerComponent";

class ClassComponent extends React.Component {
  // Initial Phase
  constructor(props) {
    // console.log(`Constructor Called`);
    super(props);

    // Initialsing State
    this.state = {
      favouriteColour: "Green",
      favouriteCity: "Jaipur",
      displayInnerComponent: true,
    };
  }

  // Mounting Phase

  static getDerivedStateFromProps(props, state) {
    // console.log(
    //   `getDerivedStateFromProps Called, Color : ${
    //     state.favouriteColour
    //   }, Props: ${JSON.stringify(props)}`
    // );
    return { favouriteColour: props.color }; // Returning Update State
  }

  render() {
    // console.log(`Render Called`);
    return (
      <div style={{ padding: "1rem" }}>
        <span style={{ color: this.state.favouriteColour }}>
          My favourite colour is {this.state.favouriteColour}
        </span>
        <br />
        <span>My favourite city is {this.state.favouriteCity}</span>
        <br />
        <br />
        {/*Conditional Rendering*/}
        {this.state.displayInnerComponent && <InnerComponent />}
        <br />
        <br />
        <button
          onClick={() =>
            this.setState({
              displayInnerComponent: false,
            })
          }
        >
          Disable Inner Component
        </button>
      </div>
    );
  }

  componentDidMount() {
    // console.log(`componentDidMount Called`);
    this.setState({ favouriteColour: "Purple", favouriteCity: "Mumbai" });
  }

  // Updating Phase

  // Using this lifecycle method we can avoid unnecessary re-rendering
  shouldComponentUpdate() {
    // console.log("shouldComponentUpdate Called");
    return true; // Here true means call the render method, false means don't call it.. Default value is true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("getSnapshotBeforeUpdate Called");
    // console.log("Previous State : ", prevState);
    return {};
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate Called");
  }

  // Unmounting Phase

  componentWillUnmount() {
    // console.log("componentWillUnmount Called");
  }
}

export default ClassComponent;

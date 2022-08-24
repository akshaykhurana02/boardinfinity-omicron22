import React from "react";

class App extends React.Component {
  // Mounting Phase

  constructor() {
    super(); // This is used for calling Parent's Class Constructor, and also linking this keyword with the current component
    // console.log("constructor");
    this.state = { color: "red", displayColorComponent: true }; // Initial State
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps, Color : ", state.color);
    return { color: props.color };
  }

  // This is the only mandatory lifecycle method

  render() {
    // This is the main method, which is used to display content on the DOM
    // console.log("render");
    return (
      <div>
        <h1>We are learning Lifecycle Methods</h1>
        <button
          onClick={() =>
            this.setState({ color: "green", displayColorComponent: false })
          }
          style={{
            backgroundColor: this.state.color,
            border: 0,
            padding: "1rem",
          }}
        >
          Click me!
        </button>
        <hr />
        {/* {this.state.displayColorComponent && <ColorComponent />} */}
      </div>
    );
  }

  componentDidMount() {
    // This lifecycle method is used for updating state before the first load, or calling some api to fetch some data
    // console.log("componentDidMount");
    //this.setState({ color: 'blue' }); // It will call the render method again, after updating the state
    // console.log("------Mounting Phase Complete-----");
  }

  // Updating Phase

  // Shall I update the component or not?
  shouldComponentUpdate() {
    // console.log("shouldComponentUpdate");
    // if(this.state.color === 'red') {
    //   return false;
    // }
    return true; // Now it will call render()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("getSnapshotBeforeUpdate");
    // console.log("Previous State : ", prevState.color);
    return {};
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
    // console.log("------Updating Phase Complete-----");
  }
}

export default App;

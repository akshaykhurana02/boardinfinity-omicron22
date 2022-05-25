import React, { Component, useState } from "react";

// Example of Class Component

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonDisabled: false, backgroundColor: "yellow" }; // State Initialisation
  }

  static getDerivedStateFromProps(props, state) {
    if (props.background) {
      return {
        backgroundColor: props.background,
        buttonDisabled: props.isDisabled,
      }; // It will over-write the initial value of the corresponding state
    }
    return {};
  }

  shouldComponentUpdate() {
    if (this.props.label === "Sign In") {
      return false; // Here false means component will not re-render though state will be update
    }
    return true;
  }

  componentDidUpdate() {
      console.log("Component Updated!");
  }

  handleDisableButton = () => {
    this.setState({ buttonDisabled: true, backgroundColor: "grey" });
  };

  render() {
    return (
      <div>
        <button
          style={{
            margin: "10px",
            backgroundColor: `${this.state.backgroundColor}`,
            border: "0px",
            padding: "5px",
          }}
          disabled={this.state.buttonDisabled}
          onClick={this.handleDisableButton}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

// Example of Functional Component

// const ButtonComponent = (props) => {
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   return (
//     <div>
//       <button
//         style={{
//           margin: "10px",
//           backgroundColor: `${props.background}`,
//           border: "0px",
//           padding: "5px",
//         }}
//         disabled={buttonDisabled}
//         onClick={() => setButtonDisabled(!buttonDisabled)}
//       >
//         {" "}
//         {props.label}{" "}
//       </button>{" "}
//     </div>
//   );
// };

ButtonComponent.defaultProps = {
  label: "Don't Click Me",
};

export default ButtonComponent;

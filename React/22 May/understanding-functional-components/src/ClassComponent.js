import React, { Component } from "react";

class ClassComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { firstName: "Akshay", lastName: "Khurana" };
  }

  handleClick = () => {
    this.setState({ firstName: "Aman", lastName: "Goel" });
  };

  componentDidMount = () => {};

  render() {
    return (
      <div onClick={this.handleClick}>
        My Name is : {this.state.firstName} {this.state.lastName}
        <br/>
        <span>Prop value is : {this.props.propName}</span>
      </div>
    );
  }
}

export default ClassComponent;

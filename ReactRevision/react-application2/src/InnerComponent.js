import React from "react";

class InnerComponent extends React.Component {
  render() {
    console.log("render Method called (Inner Component)");
    return <div>This is an inner component.</div>;
  }

  componentWillUnmount() {
    console.log("InnerComponent Unmounted!");
  }
}

export default InnerComponent;

import React from "react";

function ChildComponent(props) {
  // Return Function is compulsory to display any content

  return (
    // JSX -> JavaScript and XML
    <div>
      My name is {props.name}
    </div>
  );
}

// Default Props will be used when we don't pass any prop from the Parent Component

ChildComponent.defaultProps = {
    name: "Akshay Kumar"
}

export default ChildComponent;

import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Manisha More" />
      {/* Here name is a prop, that we are using to send the value to the Child Component */}
      <ChildComponent name="Akshay Khurana" />
      <ChildComponent name="Noorul" />
      <ChildComponent name="Vikas Sahane" />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;

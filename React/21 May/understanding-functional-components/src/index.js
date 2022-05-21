import React from "react";
import ReactDOM from "react-dom/client";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import UseEffectComponent from "./UseEffectComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ClassComponent propName="Holalala!" />
    <hr />
    <FunctionalComponent propName="Holalala!" /> */}
    <UseEffectComponent />
  </React.StrictMode>
);

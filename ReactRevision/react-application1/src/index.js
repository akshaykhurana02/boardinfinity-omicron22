import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Static Data
const studentsDetails = [
  {
    id: 1,
    name: "Akshay",
    phoneNumber: "123456",
    city: "Bangalore",
  },
  {
    id: 2,
    name: "Arun",
    phoneNumber: "123456",
    city: "Mumbai",
  },
  {
    id: 3,
    name: "Samarth",
    phoneNumber: "123456",
    city: "Chennai",
  },
  {
    id: 4,
    name: "Virat",
    phoneNumber: "123456",
    city: "Delhi",
  },
];

root.render(
  <React.StrictMode>
    {studentsDetails.map((student) => {
      return (
        <>
          <ClassComponent
            key={student.id}
            name={student.name}
            phoneNumber={student.phoneNumber}
            city={student.city}
          />
          <FunctionalComponent
            key={student.id}
            name={student.name}
            phoneNumber={student.phoneNumber}
            city={student.city}
          />
          <br />
        </>
      );
    })}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

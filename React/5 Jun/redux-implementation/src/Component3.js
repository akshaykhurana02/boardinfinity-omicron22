import React from "react";
import { changeLoggedInUserName } from "./redux/actionCreators";
import { useSelector, useDispatch } from "react-redux";

const Component3 = () => {
  const result = useSelector((state) => state.calculatorOperations);
  const actionDispatcher = useDispatch();

  return (
    <div style={{ marginTop: "2rem" }}>
      <label>Result</label>
      <input style={{ margin: "0.2rem" }} type="text" value={result} />
      <br />
      <br />
      <button
        onClick={() =>
          actionDispatcher(
            changeLoggedInUserName(Math.ceil(Math.random() * 10))
          )
        }
      >
        Change User
      </button>
      <br />
      <br />
    </div>
  );
};

export default Component3;

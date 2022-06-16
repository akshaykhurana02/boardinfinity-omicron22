import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  additionAction,
  subtractionAction,
  multiplicationAction,
  divisionAction,
} from "./redux/actionCreators";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const result = useSelector((state) => state.calculatorOperations);
  const actionDispatcher = useDispatch();
  return (
    <div className="App">
      <h3>My Calculator</h3>
      <table align="center">
        <tr>
          <td>
            <label>First Number</label>
          </td>
          <td>
            <input
              style={{ margin: "0.2rem" }}
              type="text"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Second Number</label>
          </td>
          <td>
            <input
              style={{ margin: "0.2rem" }}
              type="text"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
            />
          </td>
        </tr>
        {/* <tr>
          <td>
            <label>Result</label>
          </td>
          <td>
            <input style={{ margin: "0.2rem" }} type="text" value={result} />
          </td>
        </tr> */}
      </table>
      <br />
      <button
        style={{ margin: "0.2rem" }}
        onClick={() =>
          actionDispatcher(
            additionAction(parseInt(firstNumber), parseInt(secondNumber))
          )
        }
      >
        +
      </button>
      <button
        style={{ margin: "0.2rem" }}
        onClick={() =>
          actionDispatcher(
            subtractionAction(parseInt(firstNumber), parseInt(secondNumber))
          )
        }
      >
        -
      </button>
      <button
        style={{ margin: "0.2rem" }}
        onClick={() =>
          actionDispatcher(
            multiplicationAction(parseInt(firstNumber), parseInt(secondNumber))
          )
        }
      >
        *
      </button>
      <button
        style={{ margin: "0.2rem" }}
        onClick={() =>
          actionDispatcher(
            divisionAction(parseInt(firstNumber), parseInt(secondNumber))
          )
        }
      >
        /
      </button>
    </div>
  );
}

export default App;

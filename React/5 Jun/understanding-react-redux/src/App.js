import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <button onClick={() => dispatch(decrementNumber())}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(incrementNumber())}>+</button>
    </div>
  );
}

export default App;

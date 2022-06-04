import { useEffect, useRef, useState } from "react";

function MyCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // Here false is inital value for state buttonsDisabled
  const [result, setResult] = useState(0);

  const inputElementOne = useRef();
  const inputElementTwo = useRef();
  const inputElementResult = useRef();

  const addButtonRef = useRef();
  const subtractButtonRef = useRef();
  const multiplyButtonRef = useRef();
  const divideButtonRef = useRef();
  const enableDisableButtonRef = useRef();

  useEffect(() => {
    if (buttonsDisabled) {
      addButtonRef.current.disabled = true;
      subtractButtonRef.current.disabled = true;
      multiplyButtonRef.current.disabled = true;
      divideButtonRef.current.disabled = true;
    } else {
      addButtonRef.current.disabled = false;
      subtractButtonRef.current.disabled = false;
      multiplyButtonRef.current.disabled = false;
      divideButtonRef.current.disabled = false;
    }
  }, [buttonsDisabled]);

  return (
    <div style={{ margin: "2rem" }}>
      <h3>Calculator</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        ref={inputElementOne}
      />
      <span> </span>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        ref={inputElementTwo}
      />
      <br /> <br />
      <input
        type="number"
        value={result}
        onChange={(e) => setResult(e.target.value)}
        ref={inputElementResult}
      />
      <br /> <br />
      <button style={{ margin: "0.2rem" }} ref={addButtonRef}>
        +
      </button>
      <button style={{ margin: "0.2rem" }} ref={subtractButtonRef}>
        -
      </button>
      <button style={{ margin: "0.2rem" }} ref={multiplyButtonRef}>
        *
      </button>
      <button style={{ margin: "0.2rem" }} ref={divideButtonRef}>
        /
      </button>
      <br />
      <br />
      <button
        style={{ margin: "0.2rem" }}
        ref={enableDisableButtonRef}
        onClick={() => setButtonsDisabled(!buttonsDisabled)}
      >
        {`${buttonsDisabled ? "Enable " : "Disable "} Buttons`}
      </button>
    </div>
  );
}

export default MyCalculator;

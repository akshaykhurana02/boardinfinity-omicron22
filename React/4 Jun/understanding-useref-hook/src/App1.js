import { useRef, useState } from "react";

function App1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const inputElementOne = useRef();
  const inputElementTwo = useRef();

  const focusInputOne = () => {
    inputElementOne.current.focus();
    console.log('State Value : ', num1);
    console.log(inputElementOne.current); //  Similar to document.getElementById(inputOne)
    inputElementOne.current.value = 300;
  };

  const focusInputTwo = () => {
    inputElementTwo.current.focus();
    console.log('State Value : ', num2);
    console.log(inputElementTwo.current); //  Similar to document.getElementById(inputTwo)
  };

  return (
    <div style={{ margin: "2rem" }}>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        id={`inputOne`}
        ref={inputElementOne}
      />
      <span> </span>
      <button onClick={focusInputOne}>Focus Input 1</button>
      <br />
      <br />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        id={`inputTwo`}
        ref={inputElementTwo}
      />
      <span> </span>
      <button onClick={focusInputTwo}>Focus Input 2</button>
    </div>
  );
}

export default App1;

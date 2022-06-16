export const additionAction = (firstNumber, secondNumber) => {
  return {
    type: "ADDITION",
    values: [firstNumber, secondNumber],
  };
};

export const subtractionAction = (firstNumber, secondNumber) => {
  return {
    type: "SUBTRACTION",
    values: [firstNumber, secondNumber],
  };
};

export const multiplicationAction = (firstNumber, secondNumber) => {
  return {
    type: "MULTIPLICATION",
    values: [firstNumber, secondNumber],
  };
};

export const divisionAction = (firstNumber, secondNumber) => {
  return {
    type: "DIVISION",
    values: [firstNumber, secondNumber],
  };
};

export const changeLoggedInUserName = (value) => {
  return {
    type: "CHANGE_USER",
    value: value
  };
};

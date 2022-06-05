const initialState = 0;

const calculatorOperations = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITION":
      return action.values[0] + action.values[1];
    case "SUBTRACTION":
      return action.values[0] - action.values[1];
    case "MULTIPLICATION":
      return action.values[0] * action.values[1];
    case "DIVISION":
      return action.values[0] / action.values[1];
    default:
      return state;
  }
};

export default calculatorOperations;

/*

  Reducer -> How to do?
  Reducer -> Check the action, identify it and accordingly do the work.

*/

const initialState = 0;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeNumber;

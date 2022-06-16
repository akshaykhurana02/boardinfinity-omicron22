/*

    Action specifies What to do?

*/

export const incrementNumber = () => {
  return {
    type: "INCREMENT",
  };
};

/*
    Here, this is Action -

    return {
        type: 'INCREMENT'
    }


    And this is Action Creator -

    export const incrementNumber = () => {
    return {
        type: 'INCREMENT'
    }
}

*/

export const decrementNumber = () => {
  return {
    type: "DECREMENT",
  };
};

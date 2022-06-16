const initialState = "Akshay Khurana";

const loggedInUser = (state = initialState, action) => {
  if (action.type === "CHANGE_USER") {
    switch (action.value) {
      case 1:
        return "Rishabh";
      case 2:
        return "Manisha";
      case 3:
        return "Ankit";
      case 4:
        return "Akhil";
      case 5:
        return "Roshan";
      case 6:
        return "Rakhi";
      case 7:
        return "Zayd";
      case 8:
        return "Noorul";
      case 9:
        return "Hrishikesh";
      default:
        return "Akshay";
    }
  }
  return state;
};

export default loggedInUser;

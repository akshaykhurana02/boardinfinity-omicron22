import calculatorOperations from "./calculatorOperations";
import loggedInUser from "./loggedInUser";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    calculatorOperations,
    loggedInUser
});

export default rootReducer;

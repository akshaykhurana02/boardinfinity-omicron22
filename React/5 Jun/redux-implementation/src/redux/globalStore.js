import { createStore } from "redux";
import rootReducer from "./rootReducer";

const globalStore = createStore(rootReducer);

export default globalStore;

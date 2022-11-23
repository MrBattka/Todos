import { combineReducers, createStore } from "redux";
import inputReduser from "./input-reduser";

let rootReducer = combineReducers({
    inputTask: inputReduser
});

let store = createStore(rootReducer);

export default store
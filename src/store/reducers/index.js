import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
const reducer = combineReducers({
    todoReducer:todoReducer
});

export default reducer;
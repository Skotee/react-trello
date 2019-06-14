import { combineReducers } from "redux";
import tasklistReducer from "./tasklistReducer"

export default combineReducers({
    lists: tasklistReducer
});
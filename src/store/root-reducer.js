import {combineReducers} from "redux";
import {todosReducer} from "./todos/todos-reducer";

export const rootReducer = combineReducers({
    todosReducer
})
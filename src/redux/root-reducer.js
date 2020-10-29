import {combineReducers} from "redux";
import todoItemReducer from "./todo-item/todo-item.reducer";

export default combineReducers({
    todoItem: todoItemReducer
});


import {createSelector} from "reselect";

const selectToDoItem = state => state.todoItem;

export const selectAllTodoItems = createSelector([selectToDoItem],(todoItem)=>{
    return todoItem.todoItems;
});
import {ActionTypes} from "./todo-item.types";
import {removeItemFromList} from "./todo-item.utils";
const INITIAL_STATE = {
    todoItems: []
}

const todoItemReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            return({
               ...state,
                todoItems: [...state.todoItems,action.payload]
            });

        case ActionTypes.REMOVE_ITEM:
            return({
                ...state,
                todoItems: removeItemFromList(state.todoItems, action.payload)
            });

        default: 
            return state;
        
    }   
}

export default todoItemReducer;


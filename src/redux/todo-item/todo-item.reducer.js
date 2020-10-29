import {ActionTypes} from "./todo-item.types";

const INITIAL_STATE = {
    todoItems: []
}

const todoItemReducer = (state = INITIAL_STATE,action) => {
    switch(action.types){
        case ActionTypes.ADD_ITEM:
            return({
                ...state,
                todoItems: state.todoItems.push(action.payload)
            });

        case ActionTypes.REMOVE_ITEM:
         return({
             ...state,
             todoItems: []

         });

        default: 
            return state;

    }
}

export default todoItemReducer;


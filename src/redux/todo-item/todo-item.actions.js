import {ActionTypes} from "./todo-item.types";

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: item
})
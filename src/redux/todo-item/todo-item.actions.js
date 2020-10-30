import {ActionTypes} from "./todo-item.types";

let nextId = 0;

export const addItem = (itemName) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        itemId: nextId++,
        itemName
    }
});

export const removeItem = (itemId) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: itemId
});
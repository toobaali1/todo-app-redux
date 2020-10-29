import React from "react";
import {connect} from "react-redux";
import {addItem} from "../../redux/todo-item/todo-item.actions"

const AddItemForm = ({dispatch}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addItem(e.target.itemToAdd.value))
    }

    return(
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" name="itemToAdd"/>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default connect(null)(AddItemForm);
import React from "react";
import "./add-item-form.styles.css"
import {connect} from "react-redux";
import {addItem} from "../../redux/todo-item/todo-item.actions"

const AddItemForm = ({dispatch}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {itemToAdd} = e.target;
        dispatch(addItem(itemToAdd.value));
        itemToAdd.value = "";
    }

    return(
        <div className="add-item-form">
             <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Item" name="itemToAdd" required/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default connect(null)(AddItemForm);
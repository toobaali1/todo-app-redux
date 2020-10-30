import React from "react";
import "./todo-item.styles.css";
import { removeItem } from "../../redux/todo-item/todo-item.actions";
import {connect} from "react-redux";

const ToDoItem = ({item, removeItem}) => {
    return(
        <div className="todo-item">
            <p>{item.itemName}</p>
            <button onClick={()=> removeItem(item.itemId)}>&#10004;</button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    removeItem: itemId => dispatch(removeItem(itemId))
})

export default connect(null,mapDispatchToProps)(ToDoItem);
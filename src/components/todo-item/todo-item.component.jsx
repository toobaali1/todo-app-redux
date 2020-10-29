import React from "react";
import "./todo-item.styles.css";
import { removeItem } from "../../redux/todo-item/todo-item.actions";
import {connect} from "react-redux";

const ToDoItem = ({item, removeItem}) => {
    return(
        <div className="todo-item">
            <p>{item}</p>
            <button onClick={()=> removeItem(item)}>Remove Item</button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(ToDoItem);
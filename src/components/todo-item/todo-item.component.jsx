import React from "react";
import "./todo-item.styles.css";
import CustomButton from "../custom-button/custom-button.component";

const ToDoItem = ({itemContent}) => {
    return(
        <div className="todo-item">
            <p>{itemContent}</p>
            <CustomButton>Remove Item</CustomButton>
        </div>
    )
}

export default ToDoItem;
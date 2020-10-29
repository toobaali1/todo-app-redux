import React from "react";
import "./todo-list.styles.css";
import CustomButton from "../custom-button/custom-button.component";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectAllTodoItems} from "../../redux/todo-item/todo-item.selectors";
import {addItem} from "../../redux/todo-item/todo-item.actions";
import ToDoItem from "../todo-item/todo-item.component";

const ToDoList = ({todoItems, dispatch}) => {
    return(
        <div className="todo-list">
            <h1>TO DO LIST</h1>
            {todoItems.map((item)=>
             <ToDoItem itemContent={item} />)}
            <CustomButton onClick={()=> dispatch(addItem("hello"))}>Add item</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    todoItems: selectAllTodoItems
});


export default connect(mapStateToProps)(ToDoList);
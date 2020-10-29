import React from "react";
import "./todo-list.styles.css";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectAllTodoItems} from "../../redux/todo-item/todo-item.selectors";

import ToDoItem from "../todo-item/todo-item.component";
import AddItemForm from "../add-item-form/add-item-form.component";

const ToDoList = ({todoItems}) => {
    return(
        <div className="todo-list">
            <h1>TO DO LIST</h1>
            {todoItems.map((item)=> <ToDoItem item={item} />)}

            <AddItemForm />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    todoItems: selectAllTodoItems
});


export default connect(mapStateToProps)(ToDoList);
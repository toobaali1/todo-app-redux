import React from 'react';
import './App.css';

// COMPONENTS
import ToDoList from "./components/todo-list/todo-list.component";

const App = () => {
  return (
    <div className="App">
      <ToDoList />  
    </div>
  );
}

export default App;

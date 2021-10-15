import TodoForm from "./TodoForm";
import { useState } from "react";

const TodoList = () => {
  const [todos, updateTodos] = useState([]);

  const addTodo = (todo) => {
    updateTodos([todo, ...todos]);
  }

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {(todos.length > 0) ? JSON.stringify(todos) : null} 
    </div>
  )
}

export default TodoList;
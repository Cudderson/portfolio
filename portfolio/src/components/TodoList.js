import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";

const TodoList = () => {
  const [todos, updateTodos] = useState([]);

  const addTodo = (todo) => {
    updateTodos([todo, ...todos]);
  }

  // this will be called when a "Todo" component calls props.toggleComplete
  // as we defined it below, Todo.toggleComplete will return that Todo's 'id'
  const toggleComplete = (id) => {
    updateTodos(todos.map(todo => {
        if (todo.id === id) {
            // this is the one we are supposed to update
            return {
                ...todo,
                complete: !todo.complete
            }
        }
        else {
            // return the todo as it was
            return todo;
        }
    }))
  }

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {todos.map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            toggleComplete={() => toggleComplete(todo.id)}
          />
      ))}
    </div>
  )
}

export default TodoList;
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";

const TodoList = () => {
  const [todos, updateTodos] = useState([]);
  const [todoFilter, updateTodoFilter] = useState('all');

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

  let filtered_todos = [];

  // try removing this condition since it's the default
  if (todoFilter === 'all') {
      filtered_todos = todos;
  }
  else if (todoFilter === 'active') {
      filtered_todos = todos.filter(todo => !todo.complete)
  }
  else if (todoFilter === 'completed') {
      filtered_todos = todos.filter(todo => todo.complete)
  }


  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <div>
          Remaining todos: {todos.filter(todo => !todo.complete).length}
      </div>
      <div>
          <button onClick={() => updateTodoFilter('all')}>All</button>
          <button onClick={() => updateTodoFilter('active')}>Active</button>
          <button onClick={() => updateTodoFilter('completed')}>Completed</button>
      </div>
      {filtered_todos.map(todo => (
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
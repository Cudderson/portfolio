import { useState } from "react";

const TodoForm = (props) => {

  const [text, updateText] = useState(''); 

  const handleChange = (e) => {
    updateText(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      // we use the onSubmit function provided by props (addTodo)
      // by doing this, we lift state up to TodoList where todos are stored, rather than in TodoForm
      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: text,
          complete: false,
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="text"
        value={text}
        placeholder="todo..."
        onChange={handleChange}
      />
    </form>
  )
}

export default TodoForm;
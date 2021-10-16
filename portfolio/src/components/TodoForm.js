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
      // therefore, all we need to do is call the props.onSubmit in order to store a todo
      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: text,
          complete: false,
      });

      updateText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="text"
        value={text}
        placeholder="todo..."
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>add todo</button>
    </form>
  )
}

export default TodoForm;
const Todo = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'left'}}>
      <div
        onClick={props.toggleComplete}
        style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}}
      >
        {props.todo.text}
      </div>
      <button onClick={props.deleteTodo}>X</button>
    </div>
    
  )
}

export default Todo;
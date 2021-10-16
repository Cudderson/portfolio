const Todo = (props) => {
  return (
    <div
      onClick={props.toggleComplete}
      style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}}
    >
      {props.todo.text}
    </div>
  )
}

export default Todo;
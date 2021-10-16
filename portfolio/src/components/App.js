import TodoList from "./TodoList";
import { useFetch } from "./useFetch";

const App = () => {

  let url = 'http://numbersapi.com/27/trivia';

  useFetch(url);

  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App
import TodoList from "./TodoList";
import { useFetch } from "./useFetch";
import { useState, useRef } from "react";

const App = () => {

  const [number, setNumber] = useState(0);

  const url = `http://numbersapi.com/${number}/trivia`;
  const {data, loading} = useFetch(url);

  // here, we could use useEffect to store the number in localStorage and reference it on every render to persist across a refresh

  const inputRef = useRef();

  return (
    <div>
      <div>
        {data ? data : 'loading...'}
      </div>
      <br />
      <div>
        <div>
          {"Number: " + number}
        </div>
        <button onClick={() => setNumber(Math.floor(Math.random() * 1000))}>Get Random Number Fact</button>
      </div>
      <br />
        <input ref={inputRef}/>
        <button onClick={() => {inputRef.current.focus()}}>Click To Focus On Input Field</button>
      <br />
      <TodoList />
    </div>
  )
}

export default App
import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { FormControl, FormHelperText, Input, InputLabel, List } from '@mui/material';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState(["prvi task","drugi task","treci task"])
  const [input, setInput] = useState('')

  const onInputchange = (e) => {
    setInput(e.target.value);
  }

  const onAddTodo = (e) => {
    e.preventDefault()
    console.log('moshi moshi'+input)
    setTodos([...todos, input])
    setInput('')

  }

  return (
    <div className="App">
      <h1>hello</h1>
      <FormControl>
        <InputLabel htmlFor="new-todo">To do:</InputLabel>
        <Input id="new-todo" type="text" className="" name="" value={input} onChange={onInputchange} aria-describedby="todo input" />
        <FormHelperText id="todo-helper-text">What plans do you have?</FormHelperText>
        
      </FormControl>
      <Button disabled={!input} variant="contained" type="submit" onClick={onAddTodo}>Add</Button>
      
      <List className="todo_list">
        {todos.map( todo => <Todo todo={todo} />)}
      </List>


    </div>
  );
}

export default App;

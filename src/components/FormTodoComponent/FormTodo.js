import React from 'react'
import './FormTodo.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';


function FormTodo(props) {

    const [input, setInput] = useState('')

    const onInputchange = (e) => {
        setInput(e.target.value);
    }
    const onAddHandler = (e) =>{
        e.preventDefault()
        props.onAdd(input)
        setInput('')
    }

    return (
        <form onSubmit={onAddHandler}>
            <FormControl>
                <InputLabel htmlFor="new-todo">To do:</InputLabel>
                <Input id="new-todo" type="text" className="" name="" value={input} onChange={onInputchange} aria-describedby="todo input" />
                <FormHelperText id="todo-helper-text">What plans do you have?</FormHelperText>

            </FormControl>
            <Button disabled={!input} variant="contained" type="submit">Add</Button>
        </form>
    )
}

export default FormTodo

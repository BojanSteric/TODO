import {Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import './Todo.css';

function Todo(props) {

    return (
        <List className="todo_list">
        <ListItem>
            <ListItemText primary="Todo : " secondary={props.todo.todo} />
        </ListItem>
        <Button onClick={() => props.delete(props.todo.id)} >Delete</Button>
      </List>
    )
}

export default Todo

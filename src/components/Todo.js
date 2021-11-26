import {ListItem, ListItemText } from '@mui/material'
import React from 'react'
import './Todo.css';

function Todo(props) {
    return (
        <ListItem>
            <ListItemText primary="Todo :alarm: " secondary={props.todo} />
        </ListItem>

    )
}

export default Todo

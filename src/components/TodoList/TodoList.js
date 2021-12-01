import React from 'react'
import Todo from '../TodoComponent/Todo'

function TodoList(props) {
    return (
        <div>
             {props.todos.map( todo => <Todo todo={todo} delete={props.delete} />)}
        </div>
    )
}

export default TodoList

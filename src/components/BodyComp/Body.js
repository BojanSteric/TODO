import React, { useEffect, useState } from 'react'
import TodoDialog from '../FormTodoComponent/TodoDialog';
import TodoList from '../TodoList/TodoList';
import {getAllData, deleteTodo, postTodos} from '../../backend/firebase';

function Body() {

    const [todos, setTodos] = useState([])

    useEffect(()=>{
      getAllData.then((results)=>{
        setTodos(results.map(result=>result))
      })
    },[])

    const onAddTodo = (input) => {
        postTodos(input).then((results)=>{
        setTodos(results.map(result => result))
        })
    }

    const onDelTodo = (id) => {
      deleteTodo(id).then((results)=>{
        setTodos(results.map(result => result))
      })
    }

    return (
        <div>
            <TodoDialog onAdd={onAddTodo}></TodoDialog>
            <TodoList todos={todos} delete={onDelTodo} key={todos}></TodoList>
        </div>
    )
}

export default Body

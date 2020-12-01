import React, { useState, useEffect } from "react"
import ToDoList from "./ToDoList"
import Header from "./Header"
import InputTodo from "./InputToDo"
import axios from "axios"
import { v4 as uuidv4 } from "uuid";

const TodoContainer = props => {
    const [todos, setToDos] = useState([])
    const [show, setShow] = useState(false)

    const handleChange = id => {
        setToDos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
        setShow(!show)
    }

    const deleteToDo = id => {
        setToDos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addToDoItem = title => {
        const newTodo = {
            id: uuidv4,
            title: title,
            completed: false,
        }
        setToDos([...todos, newTodo])
    }

    useEffect(() => {
        console.log("test run")
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => setToDos(response.data))
    }, [])

    return (
        <div className="container">
            <Header headerSpan={show} />
            <InputTodo addToDoProps={addToDoItem} />
            <ToDoList
                todos={todos}
                handleChangeProps={handleChange}
                deleteToDoProps={deleteToDo}
            />
        </div>
    )
}

export default TodoContainer
import React from "react"
import TodoItem from "./ToDoItem"

const ToDoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteToDoProps={props.deleteToDoProps}
        />
      ))}
    </div>
  )
}

export default ToDoList
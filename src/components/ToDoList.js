import React from "react"
import TodoItem from "./ToDoItem"

class TodosList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteToDo={this.props.deleteToDo} />
                ))}
            </div>
        )
    }
}

export default TodosList
import React from "react"

class ToDoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through"
        }

        const { completed, id, title } = this.props.todo
        return (
            <div>
                <li className="todo-item">
                    <input type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)} />
                    <button onClick={() => this.props.deleteToDo(id)}>Delete</button>
                    <span style={completed ? completedStyle : null}>
                        {title}    
                    </span>
                </li>
            </div>
        )
    }ß
}
export default ToDoItem
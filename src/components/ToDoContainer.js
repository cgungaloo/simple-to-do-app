import React from "react"
import ToDoList from "./ToDoList"
import Header from "./Header"
import InputToDo from "./InputToDo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: true
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        }));
    };

    deleteToDo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    }

    addTodoItem = title => {
        const newToDo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <InputToDo addToDoProps={this.addTodoItem} />
                <ToDoList todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteToDo={this.deleteToDo}
                />
            </div>
        );
    }
}
export default TodoContainer
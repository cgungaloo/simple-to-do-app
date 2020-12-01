import React from "react"
import ToDoList from "./ToDoList"
import Header from "./Header"
import InputToDo from "./InputToDo"
import axios from 'axios';

class TodoContainer extends React.Component {

    state = {
        todos: [],
        show: false
    };

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
            show: !this.state.show
        }));
    };

    deleteToDo = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => 
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo =>{
                            return todo.id !== id
                        }),
                    ],
                }))
    }

    addTodoItem = title => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
        })
        .then(response => 
            this.setState({
                todos: [...this.state.todos, response.data],
            }))
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => this.setState({ todos: response.data}))
    }

    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show}/>
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
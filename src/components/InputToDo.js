import React, { Component } from "react"

// Getting input from user interaction therefore component will be class
class InputToDo extends Component {

    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDoProps(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    name="title"></input>
                <input type="submit" value="Submit" className="input-submit"></input>
            </form>
        )
    }
}
export default InputToDo
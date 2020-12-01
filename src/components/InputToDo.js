import React, { useState } from "react"

const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title:"",
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addToDoProps(inputText.title)
        setInputText({
          title: "",
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text"
                placeholder="Add Todo..."
                value={inputText.title}
                onChange={onChange}
                name="title"></input>
            <input type="submit" value="Submit" className="input-submit"></input>
        </form>
    )
}

export default InputTodo
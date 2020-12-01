import React from "react"

const Header = () => {

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
    return(
        <header>
            <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>Simple ToDoApp</h1>
            <p style={{ fontSize: "19px" }}>Please add to do items thtough the input field</p>
        </header>
    )
}
export default Header
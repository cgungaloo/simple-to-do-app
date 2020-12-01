import React, { Component } from "react"

class Header extends Component {

    componentDidUpdate(prevProps, prevState){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if (prevProps.headerSpan !== this.props.headerSpan){
            document.getElementById("inH1").innerHTML = "checked";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
        const headerStyle = {
            padding: "30px 0",
            lineHeight: "2em",
        }
        return(
            <header style={headerStyle}>
                <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>Simple ToDoApp <span id="inH1"></span></h1>
                <p style={{ fontSize: "19px" }}>Please add to do items thtough the input field</p>
            </header>
        )
    }
}
export default Header
import React from "react";
import "../styles/userPage.css";


class UserPage extends React.Component{
    logOut = () => {
        localStorage.removeItem("loggedIn")
        this.props.history.push("/login")
    }
    render() {
        return(
            <>
                <h1>Hi there, {localStorage.getItem("loggedIn")}</h1>
                <button onClick={this.logOut} className="log__out">Log out</button>
            </>
        )
    }
}
export  default UserPage

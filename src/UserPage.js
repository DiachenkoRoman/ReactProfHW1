import React from "react";
import "./userPage.css";
import {useHistory} from "react-router-dom";

let history;

function logOut() {
    localStorage.removeItem("loggedIn")
    history.push("/login")
}

const UserPage = () =>{
    history = useHistory()
        return(
            <>
            <h1>Hi there, {localStorage.getItem("loggedIn")}</h1>
                <button onClick={logOut} className="log__out">Log out</button>
            </>
        )
}
export  default UserPage

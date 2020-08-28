import React from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom"

localStorage.setItem("admin", "porol");
let history

function checkUserInfo() {
    let userName = document.querySelector(".login").value;
    let userPass = document.querySelector(".password").value;
    if (localStorage.getItem(userName) === userPass){
        localStorage.setItem("loggedIn", userName)
        history.push("/users")

    } else if (!localStorage.getItem(userName)) {
        alert("User`s not exists")
    } else {
        alert("Invalid login or pass")
    }
}


const LoginModal =() =>{
        history = useHistory();
        return(
            <div className="login__modal">
                <input className="login" type="text" placeholder="Login"/>
                <input className="password" type="password" placeholder="Password"/>
                <button onClick={checkUserInfo} className="enter__button">Sign in</button>
                <NavLink exact to="register">Register</NavLink>
            </div>
        )
}
export default LoginModal;

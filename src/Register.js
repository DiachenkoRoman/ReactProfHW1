import React from "react";
import registerForm from "./registerForm.css";
import {useHistory} from "react-router-dom"

let history;

function setNewUser() {
    let userName = document.querySelector(".register__login").value;
    let userPass = document.querySelector(".register__password").value;
    if (localStorage.getItem(userName)){
        alert("This login`s already taken");
    } else {
        localStorage.setItem(userName, userPass);
        history.push("/login")
        alert("Try to sign now!")
    }

}

const Register = () =>{
        history = useHistory()
        return(
            <div className="register__form">
            <h1>Register page</h1>
                <input className="register__login" type="text" placeholder="Enter your login"/>
                <input className="register__password" type="text" placeholder="Enter your password"/>
                <button onClick={setNewUser} className="register__create">Create account</button>
            </div>
        )
}
export default Register

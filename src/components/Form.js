import React from "react";
import {Link} from "react-router-dom";

//Это дефолтный юзер на всякий случай, чтобы можно было войти без регистрации ака
localStorage.setItem("admin", "admin");

class FormModal extends React.Component{
    state = {
        login: "",
        password: ""
    }

    loginUser = () => {

        let userName = localStorage.getItem(this.state.login);

        if (userName){
            localStorage.setItem("loggedIn", userName)
            this.props.history.push("/users")
        } else if (!userName) {
            alert("User`s not exists")
        } else {
            alert("Invalid login or pass")
        }
    }

    registerUser = () => {

        let userName = localStorage.getItem(this.state.login);

        if (userName){
            alert("This login`s already taken");
        } else {
            localStorage.setItem(this.state.login, this.state.login);
            this.props.history.push("/login")
            alert("Try to sign now!")
        }
    }

    inputUpdate = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div className={this.props.type+"__form"}>
                <input
                    type="text"
                    name="login"
                    placeholder="Login"
                    onChange={this.inputUpdate}
                    value={this.state.login}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.inputUpdate}
                    value={this.state.password}
                />
                {this.props.type === "login" ? <button onClick={this.loginUser}>{(this.props.type).toUpperCase()}</button>: <button onClick={this.registerUser}>{(this.props.type).toUpperCase()}</button>}
                {this.props.type === "login" ? <Link to="register">Register</Link>: null}
            </div>
        )
    }
}
export default FormModal;

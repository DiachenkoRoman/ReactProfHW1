import React from "react";
import {Link} from "react-router-dom";
import {FormErrors} from "./FormErrors";

//Это дефолтный юзер на всякий случай, чтобы можно было войти без регистрации ака
localStorage.setItem("admin@admin.com", "admin");



class FormModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            formErrors: {login: "", password: ""},
            loginValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    loginUser = () => {

        let userName = localStorage.getItem(this.state.login);

        if (userName){
            localStorage.setItem("loggedIn", userName)
            this.props.history.push("/users")
        } else if (!userName){
            alert("User not exists")
        }
    }

    registerUser = () => {

        let userName = localStorage.getItem(this.state.login);
        if (userName){
            alert("Email`s already taken");
        } else {
            localStorage.setItem(this.state.login, this.state.login);
            this.props.history.push("/login");
        }

    }

    validateForm = () =>{
        this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }

    validateInputs = (fieldName, value) =>{

        let fieldValidationErrors = this.state.formErrors;
        let loginValid = this.state.loginValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case "login":
                loginValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
                fieldValidationErrors.login = loginValid ? "": "is invalid"
                break;
            case "password":
                passwordValid = value.length >= 4;
                fieldValidationErrors.password = passwordValid ? "": "must be at least 4 chars";
                break;
            default: break;
        }

        this.setState({formErrors: fieldValidationErrors, loginValid: loginValid, passwordValid: passwordValid}, this.validateForm)
    }

    inputUpdate = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value},
            ()=>{this.validateInputs(name, value)})
    }

    render() {
        return(
            <>
            <FormErrors formErrors={this.state.formErrors}/>
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
                {this.props.type === "login" ? <button disabled={!this.validateForm} onClick={this.loginUser}>{(this.props.type).toUpperCase()}</button>: <button disabled={!this.validateForm} onClick={this.registerUser}>{(this.props.type).toUpperCase()}</button>}
                {this.props.type === "login" ? <Link to="register">Register</Link>: null}
            </div>
            </>
        )
    }
}
export default FormModal;

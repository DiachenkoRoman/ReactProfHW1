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
{/*//Пытался привязать название onClick хендлера в кнопке к props.type (типа this.props.type+"User"), но не вышло*/}
                {this.props.type === "login" ? <button onClick={this.loginUser}>{(this.props.type).toUpperCase()}</button>: <button onClick={this.registerUser}>{(this.props.type).toUpperCase()}</button>}
                {this.props.type === "login" ? <Link to="register">Register</Link>: null}
            </div>
        )
//Первый способ
        // if (this.props.type === "login"){
        //     return(
        //         <div className="login__form">
        //             <input className="login"
        //                    name="login"
        //                    type="text"
        //                    placeholder="Login"
        //                    onChange={this.inputUpdate}
        //                    value={this.state.login}
        //             />
        //             <input className="password"
        //                    name="password"
        //                    type="password"
        //                    placeholder="Password"
        //                    onChange={this.inputUpdate}
        //                    value={this.state.password}
        //             />
        //             <button onClick={this.checkUserInfo} className="enter__button">Sign in</button>
        //             <NavLink exact to="register">Register</NavLink>
        //         </div>
        //     )
        //     //Именно else if, потому что этот пропс здесь жизненно важен и если будет что-то третье, то сломается
        // } else if (this.props.type === "register"){
        //     return(
        //         <div className="register__form">
        //             <h1>Register page</h1>
        //             <input className="register__login"
        //                    name="login"
        //                    type="text"
        //                    placeholder="Enter your login"
        //                    onChange={this.inputUpdate}
        //                    value={this.state.login}
        //             />
        //             <input className="register__password"
        //                    name="password"
        //                    type="text"
        //                    placeholder="Enter your password"
        //                    onChange={this.inputUpdate}
        //                    value={this.state.password}
        //
        //             />
        //             <button onClick={this.setNewUser} className="register__create">Create account</button>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <h1>Invalid page</h1>
        //     )
        // }
    }
}
export default FormModal;

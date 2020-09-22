import React from "react";
import "../styles/header.css";


class Header extends React.Component{

    logOut = () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("posts");
        this.props.history.push("/login");
    };

    render() {
        return(
            <>
            <ul className="main__header">
                <li>news</li>
                <li>communities</li>
                <li>bookmarks</li>
                <li>settings</li>
                <li>help</li>
            </ul>
                <div className="main__header_status">
                    <h1>Hi there, {this.props.userName}</h1>
                    <button onClick={this.logOut} className="log__out">Log out</button>
                </div>
            </>
        )
    }
}
export default Header

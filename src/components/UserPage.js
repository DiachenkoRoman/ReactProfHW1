import React from "react";
import Header from "./Header";
import UserMainView from "./UserMainView";
import axios from "axios"
import "../styles/userPage.css";
import UsersTop from "./UsersTop";



class UserPage extends React.Component{

    state = {
        loggedUser: localStorage.getItem("loggedIn"),
        posts: "https://jsonplaceholder.typicode.com/posts",
        users: "https://jsonplaceholder.typicode.com/users",
        photos: "https://jsonplaceholder.typicode.com/photos",
        inPosts: JSON.parse(localStorage.getItem("posts")),
        inUsers: JSON.parse(localStorage.getItem("users"))
    }

    getter = () =>{
        axios.get(this.state.posts).then(responce => localStorage.setItem("posts", JSON.stringify(responce.data.slice(0, 10))));
        axios.get(this.state.users).then(responce => localStorage.setItem("users", JSON.stringify(responce.data)));
    }

    componentDidMount() {
       if (!(localStorage.getItem("users") && localStorage.getItem("posts"))){
           this.getter();
           this.setState({inPosts: JSON.parse(localStorage.getItem("posts")), inUsers: JSON.parse(localStorage.getItem("users"))});
       }
    }

    render() {
        return(
            <>
                <Header userName={this.state.loggedUser} history={this.props.history}/>
                {/*Это типа top-rated users, просто пришла идея сайд-бара в целом и решил как-то так сделать*/}
                <UsersTop users={this.state.inUsers}/>
                {this.state.inPosts && this.state.inUsers ? <UserMainView posts={this.state.inPosts} users={this.state.inUsers}/> : <p>Loading...</p>}
            </>
        )
    }
}
export  default UserPage

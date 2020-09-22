import React from "react";
import Header from "./Header";
import UserMainView from "./UserMainView";
import "../styles/userPage.css";
import UsersTop from "./UsersTop";
import {getUsers} from "../store/actions/users.action";
import {getPosts} from "../store/actions/posts.action";
import {connect} from "react-redux"

const mapStateToProps = (state) =>({
    users: state.usersReducer.users,
    posts: state.postsReducer.posts
})

class UserPage extends React.Component{

    state = {
        loggedUser: localStorage.getItem("loggedIn")
    }

    componentDidMount() {
       this.props.dispatch(getPosts());
       this.props.dispatch(getUsers());
    }

    render() {
        return(
            <>
                <Header userName={this.state.loggedUser} history={this.props.history}/>
                {/*Это типа top-rated users, просто пришла идея сайд-бара в целом и решил как-то так сделать*/}
                <UsersTop users={this.props.users}/>
                {this.props.posts && this.props.users ? <UserMainView posts={this.props.posts} users={this.props.users}/> : <p>Loading...</p>}
            </>
        )
    }
}

export  default connect(mapStateToProps)(UserPage)

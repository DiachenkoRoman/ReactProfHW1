import React from "react";
import UserInfoModal from "./UserInfoModal";


class UsersTop extends React.Component{

    state= {
        user: null,
        showModal: false
    }

    showInfo = (event) =>{
        const ratedUserTarget = event.target.parentNode.id;
        const targetUser = this.props.users.filter(elem =>{return +elem.id === +ratedUserTarget});
        this.setState({user: targetUser[0], showModal: true});
    }
    hideInfo = () => {
        this.setState({user: null, showModal: false})
    }

    render() {
        const {users} = this.props;
        return(
            <>
                {this.state.showModal ? <UserInfoModal user={this.state.user} hide={this.hideInfo.bind(this)}/>: null}
            <ol className="userPage__top">
                {users ? users.map(elem =>{
                    return(<li key={elem.id} id={elem.id} onClick={this.showInfo}>
                        <h3 className="userPage__top_name">{elem.username}</h3>
                        <p>Name: {elem.name}</p>
                        <p>Text me: {elem.email}</p>
                        <p>Web: {elem.website}</p>
                    </li>)
                }).splice(0, 5): <li>Loading...</li> }
            </ol>
            </>
        )
    }
}

export default UsersTop

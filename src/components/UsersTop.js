import React from "react";

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
        users.splice(5);
        return(
            <>
                {this.state.showModal ?
                   <div className="userInfo">
                        <p>Name: {this.state.user.name}</p>
                        <p>Nickname: {this.state.user.username}</p>
                        <p>Email: {this.state.user.email}</p>
                        <p>Phone: {this.state.user.phone}</p>
                        <p>Website: {this.state.user.website}</p>
                       <p>Company: {this.state.user.company.name}</p>
                       <p>Creed: {this.state.user.company.catchPhrase}</p>
                       <button onClick={this.hideInfo}>Close</button>
                    </div>
                : null}
            <ol className="userPage__top">
                {users ? users.map(elem =>{
                    return(<li key={elem.id} id={elem.id} onClick={this.showInfo}>
                        <h3 className="userPage__top_name">{elem.username}</h3>
                        <p>Name: {elem.name}</p>
                        <p>Text me: {elem.email}</p>
                        <p>Web: {elem.website}</p>
                    </li>)
                }): <li>Loading...</li> }
            </ol>
            </>
        )
    }
}

export default UsersTop

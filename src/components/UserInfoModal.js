import React from "react";

class UserInfoModal extends React.Component{

    render() {
        return(
            <div className="userInfo">
                <p>Name: {this.props.user.name}</p>
                <p>Nickname: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Phone: {this.props.user.phone}</p>
                <p>Website: {this.props.user.website}</p>
                <p>Company: {this.props.user.company.name}</p>
                <p>Creed: {this.props.user.company.catchPhrase}</p>
                <button onClick={this.props.hide}>Close</button>
            </div>
        )
    }
}

export default UserInfoModal

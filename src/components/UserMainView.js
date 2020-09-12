import React from "react";

//Функциональный
// const UserMainView = (props) =>{
//
//     const updPost = (event) =>{
//         let storage = JSON.parse(localStorage.getItem("posts"));
//         for (let post of storage){
//             if (post.id === +event.target.id){
//                 post.body = event.target.textContent
//             }
//         }
//         localStorage.setItem("posts", JSON.stringify(storage));
//     }
//
//     const delPost = (event) =>{
//         event.target.parentNode.remove();
//         let storage = JSON.parse(localStorage.getItem("posts"));
//         storage = storage.filter(elem => elem.id !== +event.target.id);
//         localStorage.setItem("posts", JSON.stringify(storage));
//         if (!storage.length){
//             localStorage.removeItem("posts");
//
//         }
//     }
//
//     return(
//         <ul className="userPage__main">
//             {props.posts.map((art, index) => <li key={art.id}>
//                 {props.users.map(elem =>{
//                     if (elem.id === art.userId){
//                         return(<h3 key={index} className="userPage__main_author">{elem.username} aka {elem.name} said:</h3>)
//                     }
//                 })}
//                 <p id={art.id} contentEditable={true} suppressContentEditableWarning={true} onKeyUp={updPost} className="userPage__main_quote">{art.body}</p>
//                 <button id={art.id} onClick={delPost}>Delete</button>
//             </li>)}
//         </ul>
//     )
// }






//Классовый
class UserMainView extends React.Component{

    delPost = (event) =>{
        event.target.parentNode.remove();
        let storage = JSON.parse(localStorage.getItem("posts"));
        storage = storage.filter(elem => elem.id !== +event.target.id);
        localStorage.setItem("posts", JSON.stringify(storage));
        if (!storage.length){
            localStorage.removeItem("posts");
            window.location.reload()
        }
    }

    updPost = (event) =>{
        let storage = JSON.parse(localStorage.getItem("posts"));
        for (let post of storage){
            if (post.id === +event.target.id){
                post.body = event.target.textContent
            }
        }
        localStorage.setItem("posts", JSON.stringify(storage))
    }

    render(){
            return(
                <ul className="userPage__main">
                    {this.props.posts.map((art, index) => <li key={art.id}>
                        {this.props.users.map(elem =>{
                            if (elem.id === art.userId){
                               return(<h3 key={index} className="userPage__main_author">{elem.username} aka {elem.name} said:</h3>)
                            }
                        })}
                        <p id={art.id} contentEditable={true} suppressContentEditableWarning={true} onKeyUp={this.updPost} className="userPage__main_quote">"{art.body}"</p>
                        <button id={art.id} onClick={this.delPost}>Delete</button>
                    </li>)}
                </ul>
            )
    }
}

export default UserMainView

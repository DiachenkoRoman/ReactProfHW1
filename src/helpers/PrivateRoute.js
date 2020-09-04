import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest}) =>{
    return(
    <Route {...rest} render={props => localStorage.getItem("loggedIn") ? (
            <Component {...props} />) : (<Redirect to={{pathname: "/login"}}/>)}/>
            )
}

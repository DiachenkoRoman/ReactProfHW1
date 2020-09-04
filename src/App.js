import React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {PrivateRoute} from "./helpers/PrivateRoute";
import FormModal from "./components/Form";
import UserPage from "./components/UserPage";
import './App.css';
import "./styles/LoginModal.css"
import "./styles/registerForm.css"
import {history} from "./helpers/history"


function App() {
  return (
      <Router history={history}>
        <div className="App">
            <Switch>
                <Route exact path="/login" render={(props)=> <FormModal {...props} type="login"/>}/>
                <Route exact path="/register" render={(props)=> <FormModal {...props} type="register"/>}/>
                <PrivateRoute exact path="/users" component={UserPage}/>
                {/*Это я так хочу, чтобы если юзер залогинен, то он переходил сразу на userPage*/}
                {localStorage.getItem("loggedIn") ? <Redirect to="/users"/> : <Redirect to="login"/>}
            </Switch>
        </div>
      </Router>
  );
}

export default App;

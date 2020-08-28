import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import LoginModal from "./Login";
import "./LoginModal.css"
import Register from "./Register";
import UserPage from "./UserPage";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/login" component={LoginModal}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/users" component={UserPage}/>
                {localStorage.getItem("loggedIn") ? <Redirect exact from="/" to="/users"/> : <Redirect exact from="/" to="login"/>}
            </Switch>
        </div>
      </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import FormModal from "./components/Form";
import "./styles/LoginModal.css"
import "./styles/registerForm.css"
import UserPage from "./components/UserPage";
import {history} from "./history"

function App() {
  return (
      <Router history={history}>
        <div className="App">
            <Switch>
                <Route exact path="/login" render={(props)=> <FormModal {...props} type="login"/>}/>
                <Route exact path="/register" render={(props)=> <FormModal {...props} type="register"/>}/>
                <Route exact path="/users" component={UserPage}/>
                {localStorage.getItem("loggedIn") ? <Redirect exact from="/" to="/users"/> : <Redirect exact from="/" to="login"/>}
            </Switch>
        </div>
      </Router>
  );
}

export default App;

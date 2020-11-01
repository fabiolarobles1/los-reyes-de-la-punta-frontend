import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Sign Up/SignUp";
import Search from '../components/Search/Search';
import Guard from "./GuardedRoute";

class Routes extends Component {
  render() {
    return (
      // This component manages the paths to the different screens
      <Router history={history}>
        <Switch>
          <Guard path="/home" component={Home}></Guard>
          <Guard path="/search" component={Search}></Guard>
          <Route path="/" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

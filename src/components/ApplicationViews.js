import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Welcome from "./Welcome/Welcome"

export default class ApplicationViews extends Component {

  isAuthenticated = () => {
    return sessionStorage.getItem("activeUser") !== null
  }
  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            if (this.isAuthenticated()) return <div>regulare dashboard</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact path="/welcome" render={props => {
            return <Welcome {...props}/>
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}

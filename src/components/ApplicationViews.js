import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import Welcome from "./Welcome/Welcome"
import Login from "./Welcome/Login"
import Register from "./Welcome/Register";

export default class ApplicationViews extends Component {
  isAuthenticated = () => {
    return sessionStorage.getItem("activeUser") !== null
  }
  render() {
    return (
      <React.Fragment>

        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) return <div>regulare dashboard</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact
          path="/welcome"
          render={props => {
            // Render a default page if user is not signed in
            return <Welcome {...props} />
          }}
        />

        <Route
          exact
          path="/login"
          render={props => {
            return <Login setUser={this.props.setUser} {...props}/>
          }}
        />

        <Route
          exact
          path="/register"
          render={props => {
            return <Register setUser={this.props.setUser} {...props}/>
          }}
        />

        <Route
          path="/friends"
          render={props => {
            if (this.isAuthenticated()) return <div>friends</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/events"
          render={props => {
            if (this.isAuthenticated()) return <div>events</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/news"
          render={props => {
            if (this.isAuthenticated()) return <div>news</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/messages"
          render={props => {
            if (this.isAuthenticated()) return <div>messages</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            if (this.isAuthenticated()) return <div>tasks</div>
            else return <Redirect to="/welcome" />
          }}
        />
      </React.Fragment>
    )
  }
}

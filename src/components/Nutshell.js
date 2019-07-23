import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

class Nutshell extends Component {
  state = {
    activeUser: ""
  }

  setUser = (email) => {
    //return one user
    fetch(`http://localhost:5002/users?email=${email}`)
      .then(response => response.json())
      .then(userObject => {
        let newState = {}
        newState.activeUser = userObject.id
        this.setState(newState)
      })
  }

  render() {
    if (this.state.activeUser) {
      //if there is an active user
      return (
        <React.Fragment>
          <NavBar />
          <ApplicationViews activeUser={this.state.activeUser} setUser={this.setUser}/>
        </React.Fragment>
      );
      }
    else {
      // there is no active user
        return (
          <React.Fragment>
            <ApplicationViews activeUser={this.state.activeUser} setUser={this.setUser}/>
          </React.Fragment>
        );
      }
    }
}

export default Nutshell;

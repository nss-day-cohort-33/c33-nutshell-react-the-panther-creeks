import React, { Component } from 'react'
// import { Route, Redirect } from "react-router-dom";

export default class Welcome extends Component {
  buttonClick = (event) => {
    console.log(event.target.id)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome to Nutshell</h1>
        <button id="login" onClick={this.buttonClick}>Login</button>
        <button id="register" onClick={this.buttonClick}>Register</button>
      </div>
    )
  }
}

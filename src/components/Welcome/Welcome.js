import React, { Component } from 'react'

export default class Welcome extends Component {
  buttonClick = (event) => {
    if (event.target.id === "login") {
      console.log("login button")
      this.props.history.push("/login")
    }
    else if (event.target.id === "register") {
      console.log('reg button')
      this.props.history.push("/register")
    }
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

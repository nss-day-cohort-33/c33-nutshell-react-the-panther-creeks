import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    activeUser: ""
  }

  handleChange = (event) => {
    if (event.key === "Enter") {
      console.log(event)
      //fetch
      fetch(`http://localhost:5002/users?username=${event.target.value}`)
        .then(res => res.json())
        .then(user => {
          if (user.length === 0) window.alert("no user found!")
          else sessionStorage.setItem("activeUser", user[0].id)
        console.log(user)
      })
      //check for matching
      //post
      //fetch
      //set sessionStorage
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          autoFocus
          placeholder="username"
          onKeyPress={this.handleChange}
        />
        <button onClick={this.handleChange}>
          login
        </button>
      </div>
    )
  }
}

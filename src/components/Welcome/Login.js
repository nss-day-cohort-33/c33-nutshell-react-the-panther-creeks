import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    activeUser: ""
  }

  handleChange = (event) => {
    console.log(event)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          autoFocus
          placeholder="username"
          onChange={this.handleChange}
        />
        <button onClick={this.handleChange}>
          login
        </button>
      </div>
    )
  }
}

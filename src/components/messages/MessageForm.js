//Joe Kennerly
import React, { Component } from "react";

export default class MessageForm extends Component {
  state = {
    text: "",
    time: this.props.moment().format(),
    user_id: +sessionStorage.getItem("activeUser")
  };

  clearFields = () => {
    document.getElementById("title").value = ""
    document.getElementById("synopsis").value = ""
    document.getElementById("url").value = ""
  }

  checkFields = (event) => {
    if (
      this.state.title === "" ||
      this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      event.preventDefault()
      this.props.addItem(`articles?user_id=${+sessionStorage.getItem("activeUser")}`, this.state);
      this.clearFields()
    }
  };

  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

  render() {
    let moment = require("moment")
    //if there is an active user
    return (
      <React.Fragment>
        <form className="articleForm">
          <div className="form-group">
            <label htmlFor="name">Enter a Message</label>
            <input
              type="text"
              autoFocus
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
            />
            <button
              type="submit"
              onClick={this.checkFields}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

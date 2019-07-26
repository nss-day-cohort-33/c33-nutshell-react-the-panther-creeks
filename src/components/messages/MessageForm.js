//Group
//Entry form for messages
import React, { Component } from "react";

export default class MessageForm extends Component {
  state = {
    text: "",
    time: this.props.moment().format(),
    user_id: +sessionStorage.getItem("activeUser")
  };

  clearFields = () => {
    document.getElementById("text").value = ""
  }

  checkFields = (event) => {
    if (
      this.state.title === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      event.preventDefault()
      this.props.addItem("messages", this.state);
      this.clearFields()
    }
  };

  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

  render() {
    //if there is an active user
    return (
      <React.Fragment>
        <form className="articleForm">
          <div className="form-group">
            <label htmlFor="text">Enter a Message</label>
            <input
              type="text"
              autoFocus
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="text"
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

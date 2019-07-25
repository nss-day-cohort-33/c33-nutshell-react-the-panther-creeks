//Joe Kennerly
import React, { Component } from "react"
import APIManager from "../../modules/APIManager"

export default class MessageEditForm extends Component {
  state = {
    text: "",
    date: "",
    user_id: +sessionStorage.getItem("activeUser")
  }

  componentDidMount() {
    APIManager.get("messages", this.props.match.params.messageId).then(
      message => {
        this.setState({
          id: this.props.match.params.messageId,
          text: message.text,
        })
      }
    )
  }

  checkFields = (event) => {
    if (
      this.state.text === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      event.preventDefault()
      this.props.updateItem("messages", this.state);
    }
  };

  handleFieldChange = event => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  }

  render() {
    //if there is an active user
    return (
      <React.Fragment>
        <form className="messageForm">
          <div className="form-group">
            <label htmlFor="text">Edit Message Text</label>
            <input
              type="text"
              autoFocus
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="text"
              value={this.state.text}
            />
            <button
              type="submit"
              onClick={this.checkFields}
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
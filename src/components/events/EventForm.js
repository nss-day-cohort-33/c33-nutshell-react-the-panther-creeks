import React, { Component } from "react";
// import "./Event.css"

class EventForm extends Component {
  state = {
    name: "",
    date: "",
    url: "",
    user_id: +sessionStorage.getItem("activeUser")
  };

  checkFields = () => {
    if (
      this.state.name === "" ||
      this.state.date === "" ||
      this.state.url === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      this.props.addItem("events", this.state);
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
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="name">Event name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value={this.state.eventName}
            />
            <label htmlFor="date">Date</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.eventDate}
            />
            <label htmlFor="url">URL</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              value={this.state.eventURL}
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

export default EventForm;

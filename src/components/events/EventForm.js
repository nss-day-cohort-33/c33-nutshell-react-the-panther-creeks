import React, { Component } from "react";
// import "./Event.css"

class EventForm extends Component {
  state = {
    name: "",
    date: "",
    location: "",
    user_id: +sessionStorage.getItem("activeUser")
  };

  clearFields = () =>
  {
      document.getElementById("name").value = ""
      document.getElementById("date").value = ""
      document.getElementById("location").value = ""
  }

  checkFields = (event) => {
    if (
      this.state.name === "" ||
      this.state.date === "" ||
      this.state.location === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      event.preventDefault()
      this.props.addItem("events", this.state);
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
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.eventDate}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              value={this.state.eventlocation}
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

// Daniel Krusch
import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
// import "./Event.css"

class EventForm extends Component {
  // State stores the active user and the values from the inputs
  state = {
    name: "",
    date: "",
    location: "",
    user_id: +sessionStorage.getItem("activeUser")
  };

  // Gets the values of a specific event when the edit button is clicked
  componentDidMount() {
    APIManager.get("events", this.props.match.params.eventId)
    .then(event => {
      this.setState({
        id: this.props.match.params.eventId,
        name: event.name,
        date: event.date,
        location: event.location
      });
    });
  }

  // Validation to make sure the inputs aren't empty before information is putted to the database
  checkFields = (event) => {
    if (
      this.state.name === "" ||
      this.state.date === "" ||
      this.state.location === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      // Stops the submit button from refreshing the page
      event.preventDefault()
      this.props.updateItem("events", this.state);
    }
  };

  // When the input has a change, update the state with those values
  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

  // Like the event form but with the specific valuese of the event you clicked edit on
  render() {
    //if there is an active user
    console.log(this.props)
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
              value={this.state.name}
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              value={this.state.location}
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
    );
  }
}

export default EventForm;

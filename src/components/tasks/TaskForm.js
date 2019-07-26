import React, { Component } from "react";

//set original state with user id as session storage id

class TaskForm extends Component {
  state = {
    name: "",
    text: "",
    duedate: "",
    isCompleted: false,
    user_id: +sessionStorage.getItem("activeUser")
  };

  checkFields = (event) => {
    event.preventDefault()
    if (
      this.state.name === "" ||
      this.state.text === "" ||
      this.state.duedate === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      this.props.addItem("tasks", this.state);
    }
  };
  //handle field change EL for form fields when they are changed--Dustin Hobson
  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };
//renders task form when user is in the "Task" section ---Dustin Hoson
  render() {
    //if there is an active user
    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="name">Task name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Enter Task Name"
            />
            <label htmlFor="text">Task Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="text"
              placeholder="Enter Task Description"
            />
            <label htmlFor="duedate">Task Due Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="duedate"
              placeholder= "Enter Task Due Date"
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

export default TaskForm;
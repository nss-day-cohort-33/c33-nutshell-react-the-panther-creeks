class TaskEditForm extends Component {
  state = {
    name: "",
    text: "",
    duedate: "",
    isCompleted: false,
    user_id: "",
    id: +sessionStorage.getItem("activeUser")
  };



  componentDidMount() {
    APIManager.get("tasks", this.props.match.params.eventId)
    .then(task => {
      this.setState({
        id: this.props.match.params.eventId,
        name: task.name,
        text: task.text,
        isCompleted: task.isCompleted,
        duedate: task.duedate,

      });
    });
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
      this.props.updateItem("events", this.state);
    }
  };

  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

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

export default TaskEditForm;
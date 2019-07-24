//Joe Kennerly
import React, { Component } from "react";

class ArticleForm extends Component {
  state = {
    title: "",
    date: "",
    synopsis: "",
    url: "",
    user_id: +sessionStorage.getItem("activeUser")
  };

  checkFields = (article) => {
    if (
      this.state.title === "" ||
      this.state.date === "" || this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      article.preventDefault()
      this.props.addItem("articles", this.state);
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
            <label htmlFor="name">Article name</label>
            <input
              type="text"
              autoFocus
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
            />
            <label htmlFor="synopsis">synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
            />
            <label htmlFor="url">url</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
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

export default ArticleForm;

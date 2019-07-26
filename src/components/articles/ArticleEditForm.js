//Joe Kennerly
import React, { Component } from "react"
import APIManager from "../../modules/APIManager"

export default class ArticleEditForm extends Component {
  state = {
    title: "",
    date: "",
    synopsis: "",
    url: "",
    user_id: +sessionStorage.getItem("activeUser")
  }

  componentDidMount() {
    APIManager.get("articles", this.props.match.params.articleId).then(
      article => {
        this.setState({
          id: this.props.match.params.articleId,
          title: article.title,
          date: article.date,
          synopsis: article.synopsis,
          url: article.url
        })
      }
    )
  }

  checkFields = (event) => {
    //each form field should have a value, but just in case...
    if (
      this.state.title === "" ||
      this.state.date === "" || this.state.synopsis === "" ||
      this.state.url === ""
    ) {
      window.alert("All fields must be filled out");
    } else {
      event.preventDefault()
      this.props.updateItem("articles", this.state);
    }
  };

  handleFieldChange = event => {
    //when 'save edit article' clicked, save the particlular value
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  }

  render() {
    //this copies the articleform, but includes the values from the edited entity
    return (
      <React.Fragment>
        <form className="articleForm">
          <div className="form-group">
            <label htmlFor="name">Edit Article Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
              value={this.state.title}
            />
            <label htmlFor="date">Edit Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
            />
            <label htmlFor="synopsis">Edit Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
              value={this.state.synopsis}
            />
            <label htmlFor="url">Edit URL</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              value={this.state.url}
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
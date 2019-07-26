// All of us
import React, { Component } from "react"
import FriendSearch from "./FriendSearch"

class Friends extends Component {
  state = {
    text: "",
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
      console.log(this.state.text)
      this.props.likeItem("users", this.state.text)
      this.clearFields()
    }
  };

  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

  // Renders a search bar input and a button, with which a user may search for friends if they so desire
  render() {
    return (
      <React.Fragment>
        <form className="articleForm">
          <div className="form-group">
            <label htmlFor="text">Search For A Friend</label>
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
        <section className="friends">
          {/* Gets the friends data and filters for the friends of the active user */}
          {this.props.friends
            .filter(
              friend => friend.user_id === +sessionStorage.getItem("activeUser")
              // Then map over the friends and return some divs with the friends name and a button to delete the friend
            ).map(friendObj => {
              return (
                <div key={friendObj.friend_id}>
                friend:{" "}
                  {
                    this.props.users.find(
                      frnd => frnd.id === friendObj.friend_id
                    ).username
                  }
                <button
                    onClick={() => this.props.deleteItem("friends", friendObj.id)}
                    className="card-link"
                  >
                    Delete
                  </button>
                </div>
              )
            })}
        </section>
      </React.Fragment>
    )
  }
}

export default Friends

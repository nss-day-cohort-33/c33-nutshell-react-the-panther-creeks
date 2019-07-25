import React, { Component } from "react"

class Friends extends Component {

  render() {
    return (
      <React.Fragment>
        <section className="friends">
          {this.props.friends
            .filter(
              friend => friend.user_id === +sessionStorage.getItem("activeUser")
            ).map(friendObj => {
              console.log(friendObj)
              console.log(this.props)
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

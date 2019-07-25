import React, { Component } from "react"

class Friends extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="friends">
          {this.props.friends
            .filter(
              friend => friend.user_id === this.props.users.id
            )
            .map(friendObj => {
              return (
                <div key={friendObj.friend_id}>
                  {
                    this.props.users.find(
                      frnd => frnd.id === friendObj.friend_id
                    ).name
                  }
                </div>
              )
            })}
        </section>
      </React.Fragment>
    )
  }
}

export default Friends

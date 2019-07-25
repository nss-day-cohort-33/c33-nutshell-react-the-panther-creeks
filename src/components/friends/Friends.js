import React, { Component } from "react"

class Friends extends Component {

  render() {
    // console.log(this.props)
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
                </div>
              )
            })}
        </section>
      </React.Fragment>
    )
  }
}

export default Friends

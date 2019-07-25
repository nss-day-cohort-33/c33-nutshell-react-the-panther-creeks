//Joe Kennerly
import React, { Component } from "react"
import MessageForm from "./MessageForm"
import "./Message.css"

export default class Messages extends Component {

  newFriends = {
    user_id: +sessionStorage.getItem("activeUser"),
    friend_id: ""
  }

  hide = {
    display: "none"

  }

showBtn = (event) => {
  let userId = event.target.id.split("-")[1]
  console.log("userId", userId)
  let messageId=event.target.id.split("-")[2]
  console.log("messageId", messageId)
  let friendBtn= document.getElementById(`addFriend-${userId}-${messageId}`)
  let otherAddBtns= document.querySelectorAll(".addFriend")
  otherAddBtns.forEach(btn => btn.style.display="none")
  if (friendBtn.style.display === "none") {
    friendBtn.style.display = "block"
  } else {friendBtn.style.display = "none"}
  // {this.newFriends.friend_id} userId
    console.log(newFriends)



}

  render() {
    let moment = require("moment")
    return (
      <React.Fragment>
      <MessageForm moment={moment} addItem={this.props.addItem}/>
        <section className="messages">
          {
            this.props.messages.map(message => (
              <div key={message.id} className="card card--message">
              <div className="card-body">
                <div className="card-title">
                  <p id={`friendName-${message.user_id}-${message.id}`}
                    onClick= {this.showBtn}
                  >user #{message.user_id}</p>
                  <button className="addFriend"
                          id={`addFriend-${message.user_id}-${message.id}`}
                          style={this.hide}
                          // onClick={this.props.addItem("friends", {this.newFriends})}

                  >Add Friend</button>
                  <p>{message.text}</p>
                  <button
                    type="button"
                    className="btn btn-successgs"
                    onClick={() => {
                      this.props.history.push(`/messages/${message.id}/edit`)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      this.props.deleteItem("messages", message.id)
                    }
                    className="card-link"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            ))
          }
        </section>
      </React.Fragment>
    )
  }
}

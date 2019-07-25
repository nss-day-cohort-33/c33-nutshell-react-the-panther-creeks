//Joe Kennerly
import React, { Component } from "react"
import MessageForm from "./MessageForm"
import "./Message.css"

export default class Messages extends Component {

  render() {
    let moment = require("moment")
    return (
      <React.Fragment>
      <MessageForm moment={moment} addItem={this.props.addItem}/>
        <section className="messages">
          {
            this.props.messages.map(message => {
              if (message.user_id === +sessionStorage.getItem("activeUser")) {
                return <div key={message.id} className="card card--message">
                  <div className="card-body">
                    <div className="card-title">
                      <p>user #{message.user_id}</p>
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
              } else {
                return <div key={message.id} className="card card--message">
                  <div className="card-body">
                    <div className="card-title">
                      <p>user #{message.user_id}</p>
                      <p>{message.text}</p>
                    </div>
                  </div>
                </div>
              }


            }
            )}
        </section>
      </React.Fragment>
    )
  }
}

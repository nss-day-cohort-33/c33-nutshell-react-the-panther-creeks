//Joe Kennerly
import React, { Component } from "react"
import MessageForm from "./MessageForm"

export default class Messages extends Component {
  render() {
    console.log(this.props.users)
    return (
      <React.Fragment>
        <input type="text" id="message" />
        <button>Send</button>
        <section className="messages">
          {
            this.props.messages.map(message => (
            <div key={message.id} className="card card--message">
              <div className="card-body">
                <div className="card-title">
                  <p>user #{message.id}</p>
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

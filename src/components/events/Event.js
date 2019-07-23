import React, { Component } from "react"
import EventForm from "./EventForm"
import { Link } from "react-router-dom"
import APIManager from "../../modules/APIManager"
// import "./Event.css"

class Event extends Component {
  state = {
    events: []
  }

  render() {
      //if there is an active user
      console.log(this.props)
      return (
        <React.Fragment>
          <EventForm {...this.props}/>
          <section className="events">
          {
            this.props.events.map(event =>
                <div key={event.id} className="card card--event">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>{event.name}</h5>
                                <h6>{event.date}</h6>
                                <h5>{event.location}</h5>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick=
                                    {() =>
                                        {
                                        this.props.history.push(`/events/${event.id}/edit`);
                                        }
                                    }>
                                    Edit
                                </button>
                            <a href="#"
                                // onClick={() => this.props.deleteItem("events", event.id)}
                                className="card-link">Delete</a>
                            </div>
                        </div>
                    </div>
            )
          }
          </section>
        </React.Fragment>
      )
  }
}

export default Event

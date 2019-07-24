import React, { Component } from "react"
import EventForm from "./EventForm"
import "./Event.css"
import moment from "moment"
import { isRegExp } from "util";
// import "./Event.css"

class Event extends Component {
  state = {
    events: []
  }

  soon =
  {
      date: moment(),
      changed: false
  }

  render() {
      //if there is an active user
      return (
        <React.Fragment>
          <EventForm {...this.props}/>
          <section className="events">
          {
            this.props.events.sort((a, b) => {
                return moment(a.date).unix() - moment(b.date).unix()
            }).map((event, i) =>
            {
                if ((moment().isSame(moment(event.date), "day") || moment(event.date).isAfter(moment())) && !this.soon.changed)
                {
                    this.soon.date = event.date
                    this.soon.changed = true
                }
                if ((moment().isSame(moment(event.date), "day") || moment(event.date).isAfter(moment())) && moment(event.date).unix() <= moment(this.soon.date).unix())
                {
                    return <div key={event.id} className="card card--event" id="soonest">
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
                                </div>
                            </div>
                        </div>
                }
                else {
                    return <div key={event.id} className="card card--event" id={`id-${i}`}>
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
                                </div>
                            </div>
                        </div>
                }
            }
            )
          }
          </section>
        </React.Fragment>
      )
  }
}

export default Event



//Daniel Krusch
import React, { Component } from "react"
import EventForm from "./EventForm"
import "./Event.css"
import moment from "moment"
// import { isRegExp } from "util";
// import "./Event.css"

class Event extends Component {
  state = {
    events: []
  }

  // Supposed to hold the date of the closest event when it is updated, the changed value will turn to true
  soon =
  {
      date: moment(),
      changed: false
  }

  // Render contains the events list and the event form which has the inputs to make a new list
  render() {
      //if there is an active user
      return (
        <React.Fragment>
          <EventForm {...this.props}/>
          <section className="events">
          {
            // Sorts the events from the database by date, based on unix time
            this.props.events.sort((a, b) => {
                return moment(a.date).unix() - moment(b.date).unix()
            }).map((event, i) =>
            {
                // Will update the date in the soon object with the first date in the array
                if ((moment().isSame(moment(event.date), "day") || moment(event.date).isAfter(moment())) && !this.soon.changed)
                {
                    this.soon.date = event.date
                    this.soon.changed = true
                }
                // Checks if the event occurs after the current date and if it is closer to the current date than the one in the soon object
                // If true, a special css id is applied to make it stylish
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



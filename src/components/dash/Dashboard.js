
import React, { Component } from 'react'
import moment from "moment"
import "./dash.css"




export default class Dashboard extends Component {

  soon =
  {
      date: moment(),
      changed: false
  }


  render() {
    return (
      <section className= "dash">

        <div className= "events">
          <h1>Events</h1>
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
                    return <div key={event.id} className=" card card--event" id="soonest">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>{event.name}</h5>
                                    <h6>{event.date}</h6>
                                    <h5>{event.location}</h5>
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
                                </div>
                            </div>
                        </div>
                }
            }
            )
          }


        </div>

        <div className="articles">
        <h1>Articles</h1>

        {
            this.props.articles.sort((a, b) => {
              return moment(a.date).unix() - moment(b.date).unix()
            }).map(article => (
            <div key={article.id} className="card card--article">
              <div className="card-body">
                <div className="card-title">
                  <h5>{article.title}</h5>
                  <h6>{article.synopsis}</h6>
                  <a href={article.url}>{article.url}</a><br / >
                  <h6>{article.date}</h6>


                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tasks">
        <h1>Tasks</h1>

        {

        this.props.tasks.filter(task => (!task.isCompleted)).map(task =>

        <div key={task.id} id={task.id} className="card card--event">
      <div className="card-body">
          <div className="card-title">
            <div id= {`taskNameDiv-${task.id}`}>

              <h5
                className="taskHead"
                id= {`taskName-${task.id}`}>{task.name}</h5>

            </div>
              <h6>{task.text}</h6>
              <h5>{task.duedate}</h5>

          </div>
      </div>
  </div>
        )
        }


        </div>
      </section>    )
  }
}

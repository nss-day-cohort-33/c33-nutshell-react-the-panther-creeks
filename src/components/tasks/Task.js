import React, { Component } from "react"
import TaskForm from "./TaskForm"

// import "./Event.css"

class Task extends Component {
  state = {
    tasks: []
  }

  render() {
      //if there is an active user
      console.log(this.props)
      return (
        <React.Fragment>
          <TaskForm {...this.props}/>
          <section className="Tasks">
          {
            this.props.tasks.filter(task => task.user_id === +sessionStorage.getItem("activeUser")).map(task =>
                <div key={task.id} className="card card--event">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>{task.name}</h5>
                                <h6>{task.text}</h6>
                                <h5>{task.duedate}</h5>

                                <input type="checkbox" id = "isComplete" class ="isComplete"/>
                                <label htmlFor= "isComplete">Task Complete</label>

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

export default Task

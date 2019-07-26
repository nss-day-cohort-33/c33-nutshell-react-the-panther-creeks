import React, { Component } from "react"
import "./task.css"


//task card component to insert into Dash and on TaskList---Dustin Hobson
export default class TaskCard extends Component {
  render() {
    return (
      <div key={this.props.task.id} id={this.props.task.id} className="card card--event">
      <div className="card-body">
          <div className="card-title">
            <div id= {`taskNameDiv-${this.props.task.id}`}>
            <input type="text"
                   className="nameInput"
                   id= {`taskEditForm-${this.props.task.id}`}
                   style= {this.props.hide}
                   placeholder= {this.props.task.name}
                   onChange= {this.props.handleFieldChange}
                   onKeyPress= {this.props.saveEditedTask}
                    />

              <h5
                className="taskHead"
                style= {this.props.show}
                id= {`taskName-${this.props.task.id}`}
                onClick=  {this.props.editTaskName}>{this.props.task.name}</h5>
            </div>
              <h6>{this.props.task.text}</h6>
              <h5>{this.props.task.duedate}</h5>

              <input type="checkbox"
               id = {this.props.task.id}
               className ="isComplete"
               onClick=  {() => this.props.taskComplete(this.props.task.id)}
               />
              <label htmlFor= "isComplete">Task Complete</label>

          </div>
      </div>
  </div>
    )
  }
}

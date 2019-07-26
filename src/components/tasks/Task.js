import React, { Component } from "react"
import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"
import APIManager from "../../modules/APIManager";
import "./task.css"


//Dustin--Task component to render to DOM

class Task extends Component {


  state = {
        id: "",
        name: "",
        text: "",
        duedate: "",
        isCompleted: "",
        user_id: ""
  }
//field change function for editing task name--Dustin Hobson
  handleFieldChange = evt => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange["name"] = evt.target.value
    console.log(stateToChange)
    this.setState(stateToChange)
    console.log(this.state)
  }

//Checkbox function to change isCompleted boolean in database and remove from dom---Dustin Hobson
  taskComplete= (id) => {
    APIManager.get("tasks", id )
    .then(task => {console.log(task)
      this.setState({
        id: task.id,
        name: task.name,
        text: task.text,
        duedate: task.duedate,
        isCompleted: true,
        user_id: task.user_id
      });
      }
      )
      .then(() => this.props.updateItem("tasks", this.state))
  }
//function to pull up input box in place of task name when task name is clicked--Dustin Hobson
  editTaskName = (event) => {
    let otherInputs = document.querySelectorAll(".nameInput")
    let otherTaskHeads = document.querySelectorAll(".taskHead")
    otherTaskHeads.forEach(head => head.style.display = "block")
    otherInputs.forEach(input => input.style.display = "none")
    let taskId = event.target.id.split("-")[1]
    let inputId = document.getElementById(`taskEditForm-${taskId}`)
      if (inputId.style.display === "none")  {
        inputId.style.display = "block"
      } else { inputId.style.display = "none"}

      let taskName = document.getElementById(`taskName-${taskId}`)
      if (taskName.style.display === "block") {
        taskName.style.display = "none"
      } else {taskName.style.display = "block"}


    }
 //save edited task function that creates object and updates db with it--Dustin Hobson
  saveEditedTask = (event) => {
    if (event.key==="Enter") {
        let id = (event.target.id.split("-")[1])
        console.log(id)
        APIManager.get("tasks", id).then(task => {

          let  editedTask = {
           id: task.id,
           name: this.state.name,
           text: task.text,
           duedate: task.duedate,
           isCompleted: task.isCompleted,
           user_id: task.user_id
          }

          this.props.updateItem("tasks", editedTask)
          .then(() => {
            let inputId = document.getElementById(`taskEditForm-${id}`)
            inputId.style.display= "none"
            let taskName = document.getElementById(`taskName-${id}`)
            taskName.style.display = "block"
          }
          )
        })
      }
    }




//functions to change display of input box and task header name--Dustin Hobson
 hide = {
    display: "none"

  }
show = {
  display: "block"
}


//renders tasks filtered by if task has a false boolean for isCompleted--Dustin Hobson
  render() {
    //if there is an active user
      return (
        <React.Fragment>
         <div>
          <TaskForm {...this.props}/>
         </div>
         <section className="tasks">
          {
            this.props.tasks.filter(task => (!task.isCompleted)).map(task =>
              <TaskCard key={task.id} {...this.props} task={task} handleFieldChange={this.handleFieldChange} taskComplete={this.taskComplete} editTaskName = {this.editTaskName} saveEditedTask={this.saveEditedTask} hide={this.hide} show={this.show} />


            )
          }
          </section>
        </React.Fragment>
      )
  }

}
  export default Task

import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import Welcome from "./Welcome/Welcome"
import Login from "./Welcome/Login"
import Register from "./Welcome/Register"
import Event from "./events/Event"
import Task from "./tasks/Task"
import APIManager from "../modules/APIManager"
import { withRouter } from "react-router";
import EventEditForm from "./events/EventEditForm"

class ApplicationViews extends Component {

  state = {
    events: [],
    articles: [],
    tasks: [],
    messages: [],
    friends: []
  };

  deleteItem = (name, id) => {
    console.log("inside delete item");
    let newObj = {};
    return fetch(`http://localhost:5002/${name}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => APIManager.getAll(name))
      .then(group => {
        newObj[name] = group;
        this.setState(newObj);
        console.log(name, newObj, this.state);
        this.props.history.push(`/${name}`);
      });
  };

  updateItem = (name, editedObject) => {
    let newObj = {};
    console.log(editedObject)
    return APIManager.put(name, editedObject)

    .then(() => APIManager.getAll(name))
    .then(item =>
      {
          newObj[name] = item;
          this.setState(newObj);
      }
    )
    .then(() =>
        this.props.history.push(`/${name}`))
  };

  addItem = (name, item) =>
  {
    let newObj = {};
    APIManager.post(name, item)
      .then(() => APIManager.getAll(name))
      .then(items =>
        {
            newObj[name] = items;
            this.setState(newObj);
        }
      )
      .then(() =>
        this.props.history.push(`/${name}`))
  }


  componentDidMount() {
    // Example code. Make this fit into how you have written yours.

     APIManager.getAll("tasks").then(allTasks => {
       this.setState({
         tasks: allTasks
      });
    });
  }

  isAuthenticated = () => {
    return sessionStorage.getItem("activeUser") !== null
  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) return <div>regulare dashboard</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact
          path="/welcome"
          render={props => {
            // Render a default page if user is not signed in
            return <Welcome {...props} />
          }}
        />

        <Route
          exact
          path="/login"
          render={props => {
            return <Login setUser={this.props.setUser} {...props}/>
          }}
        />

        <Route
          exact
          path="/register"
          render={props => {
            return <Register setUser={this.props.setUser} {...props}/>
          }}
        />

        <Route
          path="/friends"
          render={props => {
            if (this.isAuthenticated()) return <div>friends</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact
          path="/events"
          render={props => {
            if (this.isAuthenticated()) return <Event events={this.state.events} {...props} addItem={this.addItem}/>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            console.log(this.state)
            if (this.isAuthenticated()) return (
              <EventEditForm
                {...props}
                updateItem={this.updateItem}
              />
            );
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/news"
          render={props => {
            if (this.isAuthenticated()) return <div>news</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/messages"
          render={props => {
            if (this.isAuthenticated()) return <div>messages</div>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            if (this.isAuthenticated()) return <Task tasks={this.state.tasks} {...props} addItem={this.addItem} updateItem={this.updateItem} />
            else return <Redirect to="/welcome" />
          }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews);

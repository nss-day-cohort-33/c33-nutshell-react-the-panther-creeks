import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import Welcome from "./Welcome/Welcome"
import Login from "./Welcome/Login"
import Register from "./Welcome/Register"
import Event from "./events/Event"
import Articles from "./articles/Articles"
import ArticleEditForm from "./articles/ArticleEditForm"
import Messages from "./messages/Messages"
import MessageEditForm from "./messages/MessageEditForm"
import Task from "./tasks/Task"
import APIManager from "../modules/APIManager"
import { withRouter } from "react-router"
import EventEditForm from "./events/EventEditForm"
import Friends from "./friends/Friends"
import FriendSearch from "./friends/FriendSearch"
import Dashboard from "./dash/Dashboard"

class ApplicationViews extends Component {
  state = {
    events: [],
    articles: [],
    tasks: [],
    messages: [],
    friends: [],
    potentialFriends: []
  }


  //Methods to be passed to components
  likeItem = (name, word) => {
    console.log("inside delete item")
    let newObj = {}
    return APIManager.getLike(name, word)
    .then(group => {
      console.log(group)
      newObj["potentialFriends"] = group
      this.setState(newObj)
      console.log(name, newObj, this.state)
      this.props.history.push(`/friends/search`)
    })
  }


  deleteItem = (name, id) => {
    console.log("inside delete item")
    let newObj = {}
    return fetch(`http://localhost:5002/${name}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => APIManager.getAll(`${name}?user_id=${+sessionStorage.getItem("activeUser")}`
      ))
      .then(group => {
        newObj[name] = group
        this.setState(newObj)
        console.log(name, newObj, this.state)
        this.props.history.push(`/${name}`)
      })
  }
  deleteMessage = (name, id) => {
    console.log("inside delete item")
    let newObj = {}
    return fetch(`http://localhost:5002/${name}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => APIManager.getAll(`${name}`
      ))
      .then(group => {
        newObj[name] = group
        this.setState(newObj)
        console.log(name, newObj, this.state)
        this.props.history.push(`/${name}`)
      })
  }
  updateItem = (name, editedObject) => {
    let newObj = {}
    return APIManager.put(name, editedObject)
      .then(() =>
        APIManager.getAll(
          `${name}?user_id=${+sessionStorage.getItem("activeUser")}`
        )
      )
      .then(item => {
        newObj[name] = item
        this.setState(newObj)
      })
      .then(() => this.props.history.push(`/${name}`))
  }
  updateMessage = (name, editedObject) => {
    let newObj = {}
    return APIManager.put(name, editedObject)
      .then(() =>
        APIManager.getAll(
          `${name}`
        )
      )
      .then(item => {
        newObj[name] = item
        this.setState(newObj)
      })
      .then(() => this.props.history.push(`/${name}`))
  }

  addItem = (name, item) => {
    let newObj = {}
    APIManager.post(name, item)
      .then(() =>
        APIManager.getAll(
          `${name}?user_id=${+sessionStorage.getItem("activeUser")}`
        )
      )
      .then(items => {
        newObj[name] = items
        this.setState(newObj)
      })
      .then(() => this.props.history.push("/"))
      .then(() => this.props.history.push(`/${name}`))
  }
  addMessage = (name, item) => {
    let newObj = {}
    APIManager.post(name, item)
      .then(() =>
        APIManager.getAll(
          `${name}`
        )
      )
      .then(items => {
        newObj[name] = items
        this.setState(newObj)
      })
      .then(() => this.props.history.push(`/${name}`))
  }

  //loading user data to update state object
  componentDidMount() {
    const newState = {}
    APIManager.getAll(`events?user_id=${+sessionStorage.getItem("activeUser")}`)
      .then(allEvents => (newState.events = allEvents))
      .then(() =>
        APIManager.getAll(
          `articles?user_id=${+sessionStorage.getItem("activeUser")}`
        )
      )
      .then(allArticles => (newState.articles = allArticles))
      .then(() => APIManager.getAll("messages"))
      .then(allMessages => (newState.messages = allMessages))
      .then(() => APIManager.getAll("users"))
      .then(allUsers => (newState.users = allUsers))
      .then(() => APIManager.getAll("friends"))
      .then(allFriends => (newState.friends = allFriends))
      .then(() =>
        APIManager.getAll(
          `tasks?user_id=${+sessionStorage.getItem("activeUser")}`
        )
      )
      .then(allTasks => (newState.tasks = allTasks))
      .then(() => this.setState(newState))
  }

  // check session storage for value, return true or false
  isAuthenticated = () => {
    return sessionStorage.getItem("activeUser") !== null
  }

  render() {

    //route to all views
    //if "isAuthenticated" returns true, then routes are accessible to users
    //otherwise, route to welcome page

    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) return <Dashboard events={this.state.events} tasks={this.state.tasks} articles={this.state.articles}/>
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
            return <Login setUser={this.props.setUser} {...props} />
          }}
        />

        <Route
          exact
          path="/register"
          render={props => {
            return <Register setUser={this.props.setUser} {...props} />
          }}
        />


        <Route
          path="/friends"
          render={props => {
            if (this.isAuthenticated()) return <Friends likeItem={this.likeItem} deleteItem={this.deleteItem} friends={this.state.friends} users={this.state.users}/>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/friends/search"
          render={props => {
            if (this.isAuthenticated()) return <FriendSearch addFriend={this.addItem} potentialFriends={this.state.potentialFriends}/>
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact
          path="/events"
          render={props => {
            if (this.isAuthenticated())
              return (
                <Event
                  events={this.state.events}
                  {...props}
                  addItem={this.addItem}
                />
              )
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            console.log(this.state)
            if (this.isAuthenticated())
              return <EventEditForm {...props} updateItem={this.updateItem} />
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact
          path="/articles"
          render={props => {
            if (this.isAuthenticated())
              return (
                <Articles
                  articles={this.state.articles}
                  {...props}
                  addItem={this.addItem}
                  deleteItem={this.deleteItem}
                />
              )
            else return <Redirect to="/welcome" />
          }}
        />
        <Route
          path="/articles/:articleId(\d+)/edit"
          render={props => {
            // console.log(this.state)
            if (this.isAuthenticated())
              return <ArticleEditForm {...props} updateItem={this.updateItem} />
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          exact
          path="/messages"
          render={props => {
            if (this.isAuthenticated())
              return (
                <Messages
                  {...props}
                  friends={this.state.friends}
                  users={this.state.users}
                  messages={this.state.messages}
                  addItem={this.addMessage}
                  deleteItem={this.deleteMessage}
                />
              )
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/messages/:messageId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated())
              return <MessageEditForm {...props} updateItem={this.updateMessage} />
            else return <Redirect to="/welcome" />
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            if (this.isAuthenticated())
              return (
                <Task
                  tasks={this.state.tasks}
                  {...props}
                  addItem={this.addItem}
                  updateItem={this.updateItem}
                  deleteItem={this.deleteItem}
                />
              )
            else return <Redirect to="/welcome" />
          }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)

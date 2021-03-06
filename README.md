# The Panther Creeks

### Setup instructions
1. Clone down nutshell repository
1. Run `npm install` in your terminal
1. start json-server on port 5002
1. run `npm start`

### Usage
Register
1. Register new user by clicking 'Register' button from Welcome Page
1. Enter Email, username and password
1. Click 'Register New User' button

Login
1. Click Login button from Welcome Page
1. Enter Username and Password
1. Click 'Login'

Once logged in, users may view all events, articles and tasks in their dashboard. Users can add new entries inside each page
### Special Notes
Articles, tasks and events will only display current user's information. All form fields must be properly filled out to submit new entry. New friends can be added from the 'Messages' page.

<!-- # Nutshell: The Information Dashboard

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be using the React library to build out this application.

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "connectionId": 1, "userId": 1, "otherFriendId": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage" }
```

## Professional Requirements

1. All teammates must use React and JSON-server.
1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application

## How to Handle Authentication

You will be using session storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their username and password to the `users` collection in your API. You will then immediately take the `id` of the object in the response and save it to session storage.

```js
sessionStorage.setItem("activeUser", user.id)
```

If you want to add a Logout feature, all you need to do it remove the session storage item.

```js
sessionStorage.removeItem("activeUser")
``` -->

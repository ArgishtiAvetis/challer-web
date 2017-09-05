import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Pages
import Homepage from './pages/Homepage';
// import About from './pages/About';
import SingleChallenge from './pages/SingleChallenge';
// import Account from './pages/Account';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.initialPosts,
      post: props.initialPost
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={(props) => <Homepage {...props} posts={this.state.posts} />} />
          <Route path="/about" component={About} />
          <Route path="/c\/:slug" component={(props) => <SingleChallenge {...props} post={this.state.post} />} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;




const About = () => {
  return (<div>About</div>)
}

const Account = () => {
  return (
    <div>
      <form method="post" action="http://localhost:8080/add-challenge">
        <input type="text" name="title" placeholder="title" /><br />
        <input type="text" name="category" placeholder="category" /><br />
        <textarea name="body"></textarea><br />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

const SignUp = () => {
  return (<div>Homepage</div>)
}

const Login = () => {
  return (<div>Login</div>)
}

const NotFound = () => {
  return (<div>NotFound</div>)
}
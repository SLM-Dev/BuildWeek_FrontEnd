import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import { StoriesView } from '../views';

// import authenticate from './authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    }
  };


  componentDidMount() {
    localStorage.setItem("username", this.state.username)
  }


  render() {
    return (
      <div className="App">

      <div className="topBar">
        <nav>
          <div className="nav-links">
            <NavLink to="/about-us">
              About Us
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/add-story">Submit Your Story</NavLink>
          </div>
        </nav>
      </div>
      

        <h1>App Test</h1>
        <StoriesView />
      </div>
    );
  }
}


// export default authenticate(App);

export default App;
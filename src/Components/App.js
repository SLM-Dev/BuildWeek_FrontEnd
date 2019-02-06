import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import { HomeView, StoriesView, AddStoryFormView, AboutUsView, ThankYouView, StoryView } from '../views';
import Story from './Story';

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
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/stories">Stories</NavLink>
              <NavLink to="/add-story">Submit Your Story</NavLink>
            </div>
          </nav>

          <Route path="/about-us" component={AboutUsView} />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/stories" component={StoriesView} />
          <Route path="/stories/:id" render={props => (
            <Story
              {...props}
              stories={this.state.stories}
            />
          )}
          />
          <Route path="/add-story" render={props => <AddStoryFormView {...props} />} />
          <Route path="/thank-you" component={ThankYouView} />

        </div>
      
      </div>
    );
  }
}


// export default authenticate(App);

export default App;
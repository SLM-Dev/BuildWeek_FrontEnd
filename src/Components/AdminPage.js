import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, NavLink} from 'react-router-dom';
import { logout } from '../actions';
import AllStories from './AllStories';
import AllStoryView from '../views/AllStoryView';
import Signin from '../auth/Signin';

class AdminPage extends Component {
	constructor() {
		super();
		this.state = {
			OKToRender: true
		};
	}

	render() {
		return (
			<>				
				<header>
					<nav className="adminNavbar">
						<NavLink className="navLink" to='/admin/signin'>Signin</NavLink>
						&nbsp;|&nbsp;
						<NavLink className="navLink" to='/admin/all-stories'>All Stories</NavLink>
						&nbsp;|&nbsp;
						<NavLink className="navLink" to='/admin/singout' onClick={this.props.logout}>
							SignOut
						</NavLink>
					</nav>
				</header>
				<main className="adminContent">
					<Route path='/admin/signin' component={Signin} />
					<Route exact path='/admin/all-stories' component={AllStories} />
					{/* <Route path="/admin/all-stories/:id" component={AllStoryView} /> */}
					<Route path="/admin/all-stories/:id" render={props => <AllStoryView {...props} />} />
				</main>
			</>
		);
	}
}

export default withRouter(
	connect(
		({logingIn, self}) => ({logingIn, self}),
		{logout}
	)(AdminPage)
);
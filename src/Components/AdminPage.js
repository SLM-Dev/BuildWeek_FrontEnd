import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, NavLink} from 'react-router-dom';
import { logout } from '../actions';
import AllStories from './AllStories';
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
					<nav>
						<NavLink to='/admin/signin'>Signin</NavLink>
						&nbsp;|&nbsp;
						<NavLink to='/admin/all-stories'>All Stories</NavLink>
						&nbsp;|&nbsp;
						<NavLink to='/admin/singout' onClick={this.props.logout}>
							SignOut
						</NavLink>
					</nav>
				</header>
				<main>
					<Route path='/admin/signin' component={Signin} />
					<Route path='/admin/all-stories' component={AllStories} />
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
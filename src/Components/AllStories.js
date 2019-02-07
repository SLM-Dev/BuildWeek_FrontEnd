import React from 'react';
import {getAllStories} from '../actions';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AllStories extends React.Component {
	state = {
		OKToRender: false
	};

	//Fetch the State from server
	componentDidMount() {
		this.props.getAllStories();
	}

	//Only allow content to render once stories is fully fetched
	componentDidUpdate(prevProps) {
		if (this.props.gettingAllStories !== prevProps.gettingAllStories) {
			if (!this.props.gettingAllStories) {
				this.setState({
					OKToRender: true
				});
			}
		}
	}

	render() {
		if (this.props.self.length === 0) {
			return <div>You must log in to view users</div>;
		}
		// Check to make sure all state is initiallized
		else if (!this.state.OKToRender) return <div> Loading...</div>;
console.log("test from AllStories.js", this.props.allStories)
		return (
			<>
				<h2>List of All Stories</h2>
					<ul>
						{this.props.allStories.map(allStory => {

							return (

								<Link to={`/admin/all-stories/${allStory.id}`} key={allStory.id}>
								<li>{allStory.title}</li>
								</Link>

							)
						})}
					</ul>
			</>
		);
	}
}

export default withRouter(
	connect(
		({gettingAllStories, allStories, self}) => ({gettingAllStories, allStories, self}),
		{getAllStories}
	)(AllStories)
);

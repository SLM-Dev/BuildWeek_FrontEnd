import React from 'react';
import { connect } from 'react-redux';

import Story from '../Components/Story';

class StoryView extends React.Component {
    render() {
        //Find the story at this address
        //1. Callign up the redux state
        //2. From the array of stories, find() the story which has the ID that matches the URL address. 
        const story = this.props.stories.find(
            story => `${story.id}` === this.props.match.params.id
        );
    
    return (
        <div>
            Name: {this.props.id}
        </div>
    );
    }
};

const mapStateToProps = state => ({
    stories: state.stories
  });

// export default StoryView;

export default connect(
    mapStateToProps,
    {  }
  )(StoryView);
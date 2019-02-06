import React from 'react';
import {Link} from 'react-router-dom'

const Story = props => {

    const story = props.stories.find(
        story => `${story.id}` === props.match.params.id
    );
    
    return (
        <div>
            <h4>{story.title}</h4>
            <p>{story.snippet}</p>
            <p>By: {story.author}</p>
        </div>
    )
};

export default Story;
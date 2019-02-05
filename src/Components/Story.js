import React from 'react';

const Story = props => {
    return (
        <div>
            <h4>{props.story.title}</h4>
            <p>{props.story.snippet}</p>
            <p>By: {props.story.author}</p>
        </div>
    )
};

export default Story;
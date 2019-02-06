import React from 'react';
import {Link} from 'react-router-dom'

const Story = props => {
    console.log(props)
    return (
        <div>
            <h4>{props.story.title}</h4>
            <p>{props.story.snippet}</p>
            <p>By: {props.story.author}</p>
            <p>{props.story.body}</p>
        </div>
    )
};

export default Story;
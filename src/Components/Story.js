import React from 'react';
import {Link} from 'react-router-dom'

const Story = props => {
    console.log(props)
    return (
        <div className="storyViewWrapper">
            <h4 className="storyViewTitle">{props.story.title}</h4>
            <p className="storyViewAuthor">By: {props.story.author}</p>
            <p className="storyViewCountry">{props.story.country}</p>
            <p className="storyViewBody">{props.story.body}</p>
        </div>
    )
};

export default Story;
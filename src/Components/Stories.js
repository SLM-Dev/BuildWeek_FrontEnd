import React from 'react';
import { Link } from "react-router-dom";

import Story from './Story';

const Stories = props => {

    return (

        <div>
            <h3>Refugee Stories</h3>

            {props.stories.map((story) => {

                return (
                    <Link to={`/stories/${story.id}`} key={story.id}>
                        <h4>{story.title}</h4>
                        <p>{story.snippet}</p>
                        <p>By: {story.author}</p>
                        {/* <Story key={story.id} story={story} /> */}
                    </Link>
                )
            })}

        </div>
    );
};

export default Stories;
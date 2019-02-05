import React from 'react';

import Story from './Story';

const Stories = props => {
    return (

        <div>
            <h3>Refugee Stories</h3>

            {props.stories.map((story, index) =>{
                return <Story key={index} story={story} />;
            })}
        </div>
    );
};

export default Stories;
import React from 'react';

class AllStory extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // this state needs to look like the Story Object, with id
            author: this.props.allStory.author,
            title: this.props.allStory.title,
            snippet: this.props.allStory.snippet,
            approved: this.props.allStory.approved,
            body: this.props.allStory.body,
            country: this.props.allStory.country,
            url_picture: this.props.allStory.url_picture,
            url_thumbnail: this.props.allStory.url_thumbnail,
            id: this.props.allStory.id,
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOptionChange = changeEvent => {
        this.setState({
          approved: changeEvent.target.value
        });
    };

    updateAllStory = event => {
        console.log("event is getting tiggered")
        console.log(this.updateStory)
        event.preventDefault();
        this.props.updateStory(this.state, this.state.id);
        this.props.history.push('/admin/all-stories');
    };

    render() {

        console.log("from AllStory.js",this.props)

        return (

            <div>

                <form className="updateForm">
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='author'
                        value={this.state.author}
                    />
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='title'
                        value={this.state.title}
                    />
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='snippet'
                        value={this.state.snippet}
                    />
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='approved'
                        value={this.state.approved}
                    />

                    {/* Approved?<br/>
                    Yes
                    <input
                        onChange={this.handleOptionChange}
                        type='radio'
                        name='approved'
                        value={1}
                        checked={this.state.approved === 1}
                    />
                    no 
                    <input
                        onChange={this.handleOptionChange}
                        type='radio'
                        name='approved'
                        value={0}
                        checked={this.state.approved === 0}
                    /> */}


                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='body'
                        value={this.state.body}
                    />
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='country'
                        value={this.state.country}
                    />
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='url_picture'
                        value={this.state.url_picture}
                    />
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='url_thumbnail'
                        value={this.state.url_thumbnail}
                    />

                    <button onClick={this.updateAllStory}>Update Story</button>

                </form>

            </div>
        );

    }
}


export default AllStory;
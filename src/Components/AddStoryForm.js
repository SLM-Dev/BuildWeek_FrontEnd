import React from 'react';

class AddStoryForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            title: '',
            body: '',
            country: ''
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addNewStory = event => {
        event.preventDefault();
        this.props.addStory(this.state);
    };

    render() {
        return (

            <div>

                <form>

                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='author'
                        value={this.state.author}
                        placeholder='Name'
                    />

                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='country'
                        value={this.state.country}
                        placeholder='Origin Country'
                    />

                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='title'
                        value={this.state.title}
                        placeholder='Title'
                    />

                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='body'
                        value={this.state.body}
                        placeholder='Story'
                    />

                    <button onClick={this.addNewStory}>Add Story</button>

                </form>

            </div>
        );
    }
}

export default AddStoryForm;
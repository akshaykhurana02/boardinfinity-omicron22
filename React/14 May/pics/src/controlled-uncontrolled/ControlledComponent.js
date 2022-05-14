import React, { Component } from 'react';

class ControlledComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = (event) => {
        alert('You have submitted the input successfully: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form Example</h1>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ControlledComponent;

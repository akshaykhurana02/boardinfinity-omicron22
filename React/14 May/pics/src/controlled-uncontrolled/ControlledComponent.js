import React, { Component } from 'react';

class ControlledComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', company: '' };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleCompanyChange = (event) => {
        this.setState({ company: event.target.value });
    }

    handleSubmit = (event) => {
        alert('You have submitted the input successfully: ' + 'Name : ' + this.state.name + ', Company : ' + this.state.company);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form Example</h1>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Company:
                    <input type="text" value={this.state.company} onChange={this.handleCompanyChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ControlledComponent;

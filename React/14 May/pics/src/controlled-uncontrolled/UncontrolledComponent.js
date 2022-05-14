import React, { Component } from 'react';

class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);
        //this.input = React.createRef();
    }

    updateSubmit(event) {
        alert('You have entered the UserName and CompanyName successfully.');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled Form Example</h1>
                <label>Name:
                    <input type="text" placeholder='Enter Name'/>
                </label>
                <label>
                    CompanyName:
                    <input type="text" placeholder='Enter Company Name' />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default UncontrolledComponent;

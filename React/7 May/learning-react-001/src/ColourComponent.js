import React, { Component } from 'react';

class ColourComponent extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.color, color: this.props.text }}>
                <h3>Hello {this.props.name}, {this.props.message}</h3>
            </div>
        );
    }
}

ColourComponent.defaultProps = {
    color: "green",
    name: "Akshay Khurana",
    message: "We are learning UI Development.",
    text: "black"
}

export default ColourComponent;

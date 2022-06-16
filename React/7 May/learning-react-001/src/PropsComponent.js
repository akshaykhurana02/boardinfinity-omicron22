import React, { Component } from 'react';

class PropsComponent extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome to {this.props.name} </h1>
                <p> <h4> Hello from Board Infinity</h4> </p>
            </div>
        );
    }
}

PropsComponent.defaultProps = {
    name: "Akshay Khurana"
}

export default PropsComponent;

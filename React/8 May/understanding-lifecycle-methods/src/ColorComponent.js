import React from 'react';

class ColorComponent extends React.Component {

    // This component is used for freeing memory and clearing all the unncessary stuff
    componentWillUnmount() {
        console.log("******Component Unmounted******");
    }

    render() {
        return (
            <div>
                This is color component.
            </div>
        );
    }
}

export default ColorComponent;

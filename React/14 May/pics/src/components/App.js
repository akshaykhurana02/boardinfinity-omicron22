import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    // Example to demonstrate passing value from a Child Component to Parent Component

    state = { searchedText: '' };

    onSearchSubmit = (term) => {
        this.setState({ searchedText: term }); // Value that we got from Child Component
        setTimeout(() => {
            console.log("State -> ", this.state.searchedText);
        }, 0);
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '15px' }}>
                <SearchBar onTextSubmit={this.onSearchSubmit} /> {/* Callback */}
            </div>
        );
    }
}

export default App;
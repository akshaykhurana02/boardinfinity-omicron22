import React from "react";

class SearchBar extends React.Component {

    // Child Component

    state = { searchTerm: '' };

    onFormSubmit = (event) => {
        event.preventDefault(); // This is being used for avoiding unnecesary page load...
        this.props.onTextSubmit(this.state.searchTerm);
    }

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <div className="ui raised segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} /> {/* Callback Function */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

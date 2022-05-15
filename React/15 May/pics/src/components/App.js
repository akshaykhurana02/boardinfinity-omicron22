import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] }; // Initialised Empty Array

    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID UR9d-C8Zz6rLwDWiJttrq44dg2OL72o_Ua5NZcj0zws'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results);
    //     });
    // }

    onSearchSubmit = async (term) => { // Asynchronous Function
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${term}`, {
            headers: {
                Authorization: 'Client-ID UR9d-C8Zz6rLwDWiJttrq44dg2OL72o_Ua5NZcj0zws'
            } // header is used for authorizing request
        });
        this.setState({ images: response.data.results });
    }

    onDoubleClick () { // Synchronous Function
        console.log("On Double Click");
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '15px' }}>
                <SearchBar onTextSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                {/* Found: {this.state.images.length} images */}
            </div>
        );
    }
}

export default App;
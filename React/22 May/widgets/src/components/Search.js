import React, { useState, useEffect } from 'react';
import axios from 'axios';

// useEffect Implementation

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  // This useEffect will be called on first render and when term state changes
  useEffect(() => {
    const search = async () => {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${term}`);
      setResults(response.data.query.search); // It will have an array of object with 10 entries
    };

    if (term) { // Null Check
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui primary button"
            target={'_blank'} // To open hyperlink in new tab
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* Refer this -> https://stackoverflow.com/questions/37337289/react-js-set-innerhtml-vs-dangerouslysetinnerhtml */}
        </div>
      </div>
    );
  });

  return (
    <div className='ui container'>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

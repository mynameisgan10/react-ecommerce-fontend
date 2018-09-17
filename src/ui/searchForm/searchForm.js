import React from 'react';

const SearchForm = () => {
    return (
        <div className="columns is-centered">
            <div className="column is-half">
            <div className="field" style={{marginTop: "20px"}}>
        <div className="control">
          <input className="input is-medium" type="text" placeholder="Start searching" />
        </div>
      </div>
            </div>
        </div>
    );
};

export default SearchForm;
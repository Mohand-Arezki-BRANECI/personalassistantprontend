import React, { useState } from 'react';
import SearchBar from '../search/searchBar';

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput.length > 0) {
    }
  };

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      {error && <p>Error: {error.message}</p>}
      {apiResponse && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Main;

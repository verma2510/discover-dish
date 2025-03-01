import React, { useState } from "react";
import "./searchbar.css";


export const SearchBar = ({ setQuery }) => {
  console.log(setQuery); 
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setQuery(input.trim());
  };


  return (
    <div className="search">
      <div className="searchContainer">
        <input
          className="searchInput"
          type="text"
          placeholder="Search your dish..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

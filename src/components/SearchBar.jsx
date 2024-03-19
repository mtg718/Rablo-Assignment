import React, { useState } from "react";
import './SearchBar.css';
const SearchBar = ({ onSearch, searchResultsExist }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm(""); // Clear the search term
    onSearch(""); // Reset the search results by passing an empty string
    window.location.reload();
  };

  return (
    <div
      className="searchBar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid black",
        width: "60rem",
      }}
    >
      <h1 style={{ color: "rgba(0,0,0,0.6)" }}>Employee DashBoard</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          style={{
            width: "18rem",
            padding: "0.4rem",
            borderRadius: "5px",
            border: "1px solid #007bff",
          }}
          type="text"
          placeholder="Search by ID"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className="searchbtn"
          style={{
            width: "4rem",
            padding: "0.4rem",
            borderRadius: "5px",
            color: "#f3fcff",
            backgroundColor: "#007bff",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
        >
          Search
        </button>
        {searchTerm && ( // Render the clear button only when search term is not empty
          <button
            className="searchbtn"
            style={{
              marginLeft: "0.5rem",
              padding: "0.4rem",
              borderRadius: "5px",
              color: "#f3fcff",
              backgroundColor: "#dc3545",
              border: "none",
              cursor: "pointer",
            }}
            type="button"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;

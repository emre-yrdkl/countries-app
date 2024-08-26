import React from 'react';

function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full sm:w-auto p-4 rounded-md shadow-md border border-gray-300 dark:bg-gray-800 dark:text-white"
    />
  );
}

export default SearchBar;

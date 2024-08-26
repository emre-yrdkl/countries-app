import React from 'react';

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <p className="text-xl font-bold text-gray-900 dark:text-white">Where in the world?</p>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md text-gray-900 dark:text-white"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;

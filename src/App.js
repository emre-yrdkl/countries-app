import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CountryPage from './pages/CountryPage';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // add or remove the 'dark' class to the document element based on the darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark-mode bg-slate-900' : 'light-mode'}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div className="bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden">
        <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{country.name.common}</h2>
          <p className="text-gray-700 dark:text-gray-300"><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Region:</strong> {country.region}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Capital:</strong> {country.capital}</p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;

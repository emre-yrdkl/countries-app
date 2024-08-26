import React from 'react';

export default function RegionFilter({ setRegion }) {
  return (
    <select
      onChange={(e) => setRegion(e.target.value)}
      className=" p-4 rounded-md shadow-md border border-gray-300 dark:bg-gray-800 dark:text-white"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

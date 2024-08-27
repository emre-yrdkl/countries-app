import React from 'react';

export default function RegionFilter({ setRegion }) {
  return (
    <select
      onChange={(e) => setRegion(e.target.value)}
      className=" p-4 rounded-md shadow-md border border-gray-300 dark:bg-gray-800 dark:text-white"
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

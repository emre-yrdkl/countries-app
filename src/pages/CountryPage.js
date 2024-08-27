import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function CountryPage() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            setCountry(response.data[0]);

            // if the country has borders, fetch details for each bordering country
            if(response.data[0].borders) {
                const borderCountries = await Promise.all(
                    response.data[0].borders.map(border => axios.get(`https://restcountries.com/v3.1/alpha/${border}`))
                );
                const borderCountriesData = borderCountries.map(country => country.data[0]);
                setBorderCountries(borderCountriesData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchCountry();
}, [name]);

  if (!country) return <div className="text-center">Loading...</div>;

  return (

    <div className="h-screen p-4">
      <Link to="/" className="inline-block mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white ">
        Back
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-200 dark:bg-gray-800 rounded-md p-6">
        <div>
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full sm:pr-12 max-h-[200px] sm:max-h-[600px]" />
        </div>
        <div className='mt-12'>
            <div className='mb-6 sm:mb-12'>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{country.name.common}</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg"><span className='font-bold'>Population:</span> {country.population.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg"><span className='font-bold'>Area:</span> {country.area.toLocaleString()} km²</p>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg"><span className='font-bold'>Region:</span> {country.region}</p>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg"><span className='font-bold'>Capital:</span> {country.capital}</p>
                </div>
            </div>
        </div>

        {country.borders && (
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-900 dark:text-white">Border Countries:</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {borderCountries.map(border => (
                <li key={border.flag} className='mt-4 sm:mt-0'>
                  <Link to={`/country/${border.name.common}`} className=" px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow-md text-gray-900 dark:text-white">
                    {border.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


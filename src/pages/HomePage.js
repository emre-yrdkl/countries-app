import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import axios from 'axios';
import CountryCard from '../components/CountryCard';

export default function HomePage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [region, setRegion] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                let response;
                if (region) {
                    response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
                } else {
                    response = await axios.get('https://restcountries.com/v3.1/all');
                }
                setCountries(response.data);
                setFilteredCountries(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchCountries();
    }, [region]);

    useEffect(() => {
        let filtered = countries;

        if (searchQuery) {
            filtered = filtered.filter(country =>
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredCountries(filtered);
    }, [searchQuery, countries]);

    return (
        <div className="p-4">
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <SearchBar setSearchQuery={setSearchQuery} />
                </div>
                <div className='mr-0 ml-auto'>
                    <RegionFilter setRegion={setRegion} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
                {filteredCountries.map(country => (
                <CountryCard key={country.flag} country={country} />
                ))}
            </div>
      </div>
    );
}

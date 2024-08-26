import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';


export default function HomePage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [region, setRegion] = useState('');

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
      </div>
    );
}

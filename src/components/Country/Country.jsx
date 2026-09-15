import React, { useState } from 'react';
import './Country.css';

const Country = ({
    country,
    handleVisitedCountries,
    handleVisitedFlags
}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        //  system 1
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // system 2
        // setVisited(visited ? false : true);
        // system 3
        setVisited(!visited);
        handleVisitedCountries(country);
    };

    // Get languages safely
    const languages = country?.languages?.languages
        ? Object.values(country.languages.languages).join(', ')
        : 'N/A';

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>

            {/* Country Flag */}
            <img
                className="flags-img"
                src={country?.flags?.flags?.png}
                alt={country?.flags?.flags?.alt || country?.name?.common}
            />

            {/* Country Name */}
            <h3>
                Name: {country?.name?.common}
            </h3>

            {/* Area */}
            <h3>
                Area: {country?.area?.area}{' '}
                {country?.area?.area > 30000
                    ? 'Big country'
                    : 'Small country'}
            </h3>

            {/* Population */}
            <p>
                Population: {country?.population?.population}
            </p>

            {/* Languages */}
            <h3>
                Languages: {languages}
            </h3>

            {/* Visited Button */}
            <button
                className="country-btn"
                onClick={handleVisited}
            >
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            {/* Add Flag Button */}
            <button
                className="country-btn"
                onClick={() =>
                    handleVisitedFlags(
                        country?.flags?.flags?.png
                    )
                }
            >
                Add Visited Flag
            </button>

        </div>
    );
};

export default Country;
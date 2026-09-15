
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    // Add visited country
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    // Add visited flag
    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    };

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>

            <h1>Countries... {countries.length}</h1>

            <h3>
                Total country visited: {visitedCountries.length}
            </h3>

            <h3>
                Total flags visited: {visitedFlags.length}
            </h3>

            {/* Visited Countries */}
            <ol>
                {
                    visitedCountries.map((country) => (
                        <li key={country.cca3.cca3}>
                            {country.name.common}
                        </li>
                    ))
                }
            </ol>

            {/* Visited Flags */}
            <div>
                {
                    visitedFlags.map((flag, index) => (
                        <img
                            key={index}
                            src={flag}
                            alt="Visited country flag"
                            width="100"
                        />
                    ))
                }
            </div>

            {/* All Countries */}
            <div className="countries">
                {
                    countries.map((country) => (
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Countries;
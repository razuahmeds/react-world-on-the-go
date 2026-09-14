import React from 'react';

const Country = ({country}) => {
    // console.log(country.population.population);
    console.log(country.languages);
    
    
    return (
        <div>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Area: {country.area.area}</h3>
            <h4>Capital: {country.capital.capital}</h4>
            <h5>Continents: {country.continents.continents}</h5>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;
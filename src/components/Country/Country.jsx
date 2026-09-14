import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);



    // console.log(country.population.population);
    // console.log(country.languages.languages);


    const handleVisited = () =>{

        // system 1
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }

        // system 2
        // setVisited(visited ? false : true);


        // system 3
        // setVisited(!visited)
        
        // console.log('button clicked');
        
    }
    
    
    return (
        // <div className={`country border-lg tex-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img className='flags-img' src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            {/* <h3>Area: {country.area.area}</h3> */}
            <h3>Area: {country.area.area} {country.area.area >30000 ? "Big country" : "Small country"}</h3>
            {/* <h3>languages: {country.languages.languages}</h3> */}
            <h4>Capital: {country.capital.capital}</h4>
            <h5>Continents: {country.continents.continents}</h5>
            <p>Population: {country.population.population}</p>
            <button className='country-btn' onClick={handleVisited}>
                   {visited ? 'Visited' : 'Not Visited'}
                </button>
        </div>
    );
};

export default Country;
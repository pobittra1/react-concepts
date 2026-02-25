import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleaVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    //resolve the countriesPromise here using use() hook
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;



    return (
        <div>
            <h1>Countries are Here...</h1>
            <h3>Countries visited: {visitedCountries.length}</h3>
            <h3>Flags Visited: {visitedFlags.length}</h3>

            {/* print each visited country data */}
            {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            {/* print each visited flag */}
            <div className="visited-flags-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className="countriesContainer">
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleaVisitedCountries={handleaVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
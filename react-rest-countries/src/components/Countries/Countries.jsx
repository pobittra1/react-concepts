import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleaVisitedCountries = (country) => {
        console.log(country);
    }

    //resolve the countriesPromise here using use() hook
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Countries are Here...</h1>
            <div className="countriesContainer">
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleaVisitedCountries={handleaVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
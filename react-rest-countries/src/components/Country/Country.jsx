import { useState } from "react";
import "./Country.css"

const Country = ({ country, handleaVisitedCountries }) => {
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        // normal method to toggle state
        // if (visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }
        //using ternary
        // visited ? setVisited(false) : setVisited(true);
        //using more shortcut
        //if visited true so !Visited mean set opposite of true. if false so !Visited mean set opposite of false is true.
        setVisited(!visited);
        // if not visited country so do the next line
        !visited && handleaVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && "visited-country"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country name: {country.name.common}</h3>
            <h4>Area of <span className="highlightCount">{country.name.common}</span> is {country.area.area}</h4>
            {/* conditional rendering here */}
            <p>population is: {country.population.population}. {country.population.population > 3000000 ? "Over populated country" : "best Country"}</p>
            <button onClick={handleVisit}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;
import { useState } from "react";
import CountryDetails from "../CountryDetails/CountryDetails";


const Country = ({country, handleVisitedCountry, handleAddFlag}) => {
	console.log(country);

	const {name, flags, population, area, cca3} = country;

	const [visited, setVisited] = useState(false);

	const handleVisited = () =>{
		setVisited(!visited);
	}

	// console.log(handleVisitedCountry);

	return (

		<>
			<div>
				<div className={`border border-orange-500 rounded-lg  shadow-lg p-2 flex justify-between gap-4 ${visited ? 'bg-orange-300' : 'non-visited'} flex-grow items-center`}>
				
				<div className="text-start mt-2">
					
					<h2 className={`font-semibold ${visited ? 'text-white': 'text-fuchsia-500'}`}>Name: {name.common} </h2>
					<h2 className="font-semibold">Population: {population}</h2>
					<h3 className="font-semibold">Area: {area}</h3>
					<p className="font-semibold"><small>Code: {cca3}</small></p>
					<button onClick={handleVisited} className="btn btn-success mt-2">{visited ? 'Visited' : 'Going'}</button>
					<span className="font-semibold ml-2">{visited ? 'I have visited this country' : 'i want to visit'}</span>

					<div className="flex gap-2 mt-2">
							<button onClick={() => handleAddFlag(flags.png)} className="btn btn-info ">Add Flag</button>
							<button onClick={()=> handleVisitedCountry(country)} className="btn btn-warning block">Mark Visited</button>
					</div>
				</div>

				<div>
					<img className="w-40 h-40 object-cover rounded-lg my-2" src={flags.png} alt="" />
						<CountryDetails 
					country={country}
					handleVisitedCountry={handleVisitedCountry}
					handleVisited={handleVisited}
					></CountryDetails>
				</div>
				
			</div>


			
		</div>

		</>

	);
};

export default Country;
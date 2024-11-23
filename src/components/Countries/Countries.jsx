import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {

	const [countries, setCountries] = useState([]);
	const [visitedCountry, setVisitedCountry] = useState([]);
	const [addFlag, setAddFlag] = useState([]);

	useEffect(()=>{
		fetch('https://restcountries.com/v3.1/all')
			.then(res => res.json())
			.then(data => setCountries(data))
	},[]);

	const handleVisitedCountry = (country) =>{
		console.log('add this to visited country');
		// console.log(country);

		const newVisitedCountry = [...visitedCountry, country];
		setVisitedCountry(newVisitedCountry);
	}

	const handleAddFlag = (flag) =>{
		const newAddFlag = [...addFlag, flag];
		setAddFlag(newAddFlag);

	}
	return (
		<div className="w-11/12 mx-auto text-center">
			<h2 className="font-bold text-4xl p-4">Countries: {countries.length}</h2>

			<div className="border border-orange-500 my-4 p-2 rounded-lg pl-8 bg-green-300 shadow-lg">
				<h5 className="font-semibold text-start text-2xl mb-2">Visited Country: {visitedCountry.length}</h5>
				<ul className="list-decimal font-semibold text-start">
					{
						visitedCountry.map(country => <li>{country.name.common}</li>)
					}
				</ul>
			</div>
			<div className="gap-2 border border-orange-500 flex p-2 rounded-lg mb-2 shadow-lg">
				{
					addFlag.map((flag, idx) => <img className="gap-2  rounded-lg w-20" key={idx} src={flag}/>)
				}
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-lg">
				{
					countries.map(country => <Country 
						key={country.cca3} 
						country={country}
						handleVisitedCountry={handleVisitedCountry}
						handleAddFlag={handleAddFlag}
						></Country>)

				}
			</div>
		</div>
	);
};

export default Countries;
import CountryData from "../CountryData/CountryData";


const CountryDetails = (props) => {

	// const {country, handleVisitedCountry, handleAddFlag} = props;


	return (
		<div className="font-semibold">
			<h2>Country Details</h2>
			{/* <CountryData
			country={country}
			handleAddFlag={handleAddFlag}
			handleVisitedCountry={handleVisitedCountry}
			></CountryData> */}

			<CountryData {...props}></CountryData>


			
		</div>
	);
};

export default CountryDetails;
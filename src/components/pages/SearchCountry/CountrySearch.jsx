import React, { useState } from "react";

const CountrySearch = () => {
    const [country, setCountry] = useState("");
    const [countryData, setCountryData] = useState(null);
    const [error, setError] = useState("");

    const fetchCountry = async () => {
        if (!country.trim()) return;

        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
            if (!response.ok) throw new Error("Country not found");

            const data = await response.json();
            setCountryData(data[0]); // Get the first matching country
            setError("");
        } catch (err) {
            setCountryData(null);
            setError(err.message);
        }
    };

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-3">🌎 Search for a Country</h5>
                <p className='text-gray-500'></p>
                <div className="">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Enter country name..."
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={fetchCountry}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition"
                        >
                            Search
                        </button>
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    {countryData && (
                        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-900">{countryData.name.common}</h3>
                            <img src={countryData.flags.svg} alt="Flag" className="w-24 mt-2 shadow-md rounded" />
                            <p className="text-gray-700"><strong>Capital:</strong> {countryData.capital?.[0] || "N/A"}</p>
                            <p className="text-gray-700"><strong>Region:</strong> {countryData.region}</p>
                            <p className="text-gray-700"><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CountrySearch;

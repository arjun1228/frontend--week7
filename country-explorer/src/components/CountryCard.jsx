import React from 'react';

/**
 * CountryCard Component
 * Displays information about a single country
 * 
 * Props:
 * - country: object containing country data (name, capital, population, region, flags)
 */
function CountryCard({ country }) {
  // Extract country data with fallbacks for missing values
  const name = country.name?.common || 'Unknown';
  const capital = country.capital?.[0] || 'N/A';
  const population = country.population?.toLocaleString() || 'N/A';
  const region = country.region || 'N/A';
  const flagUrl = country.flags?.png || country.flags?.svg || '';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Flag Image */}
      <div className="h-40 overflow-hidden">
        <img 
          src={flagUrl} 
          alt={`Flag of ${name}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Country Information */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold">Capital: </span>
            <span>{capital}</span>
          </p>
          <p>
            <span className="font-semibold">Population: </span>
            <span>{population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span>{region}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

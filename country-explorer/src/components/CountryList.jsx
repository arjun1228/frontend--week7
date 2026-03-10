import React from 'react';
import CountryCard from './CountryCard';

/**
 * CountryList Component
 * A grid wrapper that renders multiple CountryCard components
 * 
 * Props:
 * - countries: array of country objects to display
 */
function CountryList({ countries }) {
  // Handle empty state
  if (!countries || countries.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>No countries found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard 
          key={country.name?.common || country.cca3} 
          country={country} 
        />
      ))}
    </div>
  );
}

export default CountryList;

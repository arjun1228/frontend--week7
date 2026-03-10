import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

/**
 * App Component - Main container
 * 
 * Demonstrates:
 * - useEffect for data fetching on mount
 * - useState for managing loading, error, and success states
 * - Filtering data based on search query
 */
function App() {
  // State for storing all countries from API
  const [countries, setCountries] = useState([]);
  
  // State for the search query
  const [query, setQuery] = useState('');
  
  // Loading state - true while fetching data
  const [loading, setLoading] = useState(true);
  
  // Error state - stores error message if fetch fails
  const [error, setError] = useState(null);

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Set loading to true before fetching
        setLoading(true);
        setError(null);

        // Fetch from REST Countries API
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region,cca3'
        );

        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Sort countries alphabetically by name
        const sortedData = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        
        setCountries(sortedData);
      } catch (err) {
        // Handle fetch errors
        setError(err.message || 'Failed to fetch countries. Please try again.');
        console.error('Fetch error:', err);
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); // Empty dependency array = runs once on mount

  // Handle search - called from SearchBar component (debounced)
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Filter countries based on search query
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-6 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            🌍 Country Explorer
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-10">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading countries...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
            <p>❌ {error}</p>
          </div>
        )}

        {/* Success State - Show Country List */}
        {!loading && !error && (
          <CountryList countries={filteredCountries} />
        )}
      </main>
    </div>
  );
}

export default App;
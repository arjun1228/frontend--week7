import React, { useRef, useEffect } from 'react';

/**
 * SearchBar Component
 * Search input with auto-focus and debounced search
 * 
 * Demonstrates useRef for:
 * 1. DOM access - auto-focusing the input on page load
 * 2. Persisting values without re-render - storing timeout ID for debounce
 * 
 * Props:
 * - onSearch: callback function called with the search query (debounced)
 */
function SearchBar({ onSearch }) {
  // useRef for DOM access - to auto-focus the input
  const inputRef = useRef(null);
  
  // useRef to persist timeout ID without causing re-renders
  // This is crucial for debounce - we need to track the timeout
  // but don't want to re-render when it changes
  const debounceTimeoutRef = useRef(null);

  // Auto-focus the search input when component mounts
  useEffect(() => {
    // Focus the input element on page load
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array = runs once on mount

  // Handle input change with debounce
  const handleChange = (e) => {
    const value = e.target.value;

    // Clear any existing timeout to reset the debounce timer
    // This is why we use useRef - we need to access the previous timeout
    // without causing a re-render when we update it
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout - only call onSearch after user stops typing for 300ms
    debounceTimeoutRef.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  };

  // Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
    </div>
  );
}

export default SearchBar;

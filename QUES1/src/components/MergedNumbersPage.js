import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MergedNumbersPage = () => {
  const location = useLocation();
  const [mergedNumbers, setMergedNumbers] = useState([]);

  useEffect(() => {
    const fetchMergedNumbers = async () => {
      try {
        const response = await axios.get(`http://localhost:8008/numbers${location.search}`);
        setMergedNumbers(response.data.numbers);
      } catch (error) {
        console.error('Error fetching merged numbers:', error);
        setMergedNumbers([]);
      }
    };

    fetchMergedNumbers();
  }, [location.search]);

  return (
    <div>
      <h1>Merged Unique Numbers</h1>
      <ul>
        {mergedNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default MergedNumbersPage;

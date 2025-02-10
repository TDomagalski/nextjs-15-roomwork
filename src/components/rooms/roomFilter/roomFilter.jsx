// components/RoomFilter.jsx
import { useState } from 'react';

export default function RoomFilter({ onFilterChange }) {
  const [selectedPersons, setSelectedPersons] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedPersons(value);
    onFilterChange(value === '' ? null : value); // Przekazujemy stringa, nie liczbę!
  };

  return (
    <div className='filter-container'>
      <label htmlFor='person-filter'>Liczba osób:</label>
      <select
        id='person-filter'
        value={selectedPersons}
        onChange={handleFilterChange}
      >
        <option value=''>Wszystkie</option>
        <option value='2'>2 osoby</option>
        <option value='2 - 3'>2 - 3 osoby</option>
        <option value='3 - 4'>3 - 4 osoby</option>
        <option value='6 - 8'>6 - 8 osób</option>
      </select>
    </div>
  );
}

import { useState } from 'react';

const useSearch = (data) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return { searchText, handleSearchChange, filteredData };
};

export default useSearch;

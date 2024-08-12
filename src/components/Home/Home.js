import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import Card from '../Card/Card';
import SearchBar from "../SearchBar/SearchBar";
import Pagination from '../Pagination/Pagination';
import useSearch from '../hooks/useSearch';
import usePagination from '../hooks/usePagination';

export default function Home() {
  const navigate = useNavigate();

  const { data, nextUrl, prevUrl, handleNextPage, handlePrevPage } = usePagination('https://swapi.dev/api/people');

  const {
    searchText,
    handleSearchChange,
    filteredData
  } = useSearch(data);

  const handleLogout = () => {
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('currentUrl');
    navigate('/');
  };

  return (
    <div className="App">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <SearchBar searchText={searchText} onSearchChange={handleSearchChange} />
      <h1>Star Wars Characters</h1>
      <ul className="container-main">
        {filteredData.map((character) => (
          <li key={character.name} className='card'>
            <Card data={character} />
          </li>
        ))}
      </ul>
      <Pagination 
        onNext={handleNextPage} 
        onPrev={handlePrevPage} 
        nextUrl={nextUrl} 
        prevUrl={prevUrl} 
      />
    </div>
  );
}

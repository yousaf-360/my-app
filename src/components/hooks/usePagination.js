import { useState, useEffect } from 'react';
import useFetchData from './useFetchData';

const usePagination = (initialUrl) => {
  const { data, nextUrl, prevUrl, setCurrentUrl } = useFetchData(initialUrl);

  const handleNextPage = () => {
    if (nextUrl) {
      setCurrentUrl(nextUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevUrl) {
      setCurrentUrl(prevUrl);
    }
  };

  return { data, nextUrl, prevUrl, handleNextPage, handlePrevPage };
};

export default usePagination;

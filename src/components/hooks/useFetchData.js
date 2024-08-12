import { useState, useEffect } from 'react';

const useFetchData = (initialUrl) => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const jsonDataCharacters = jsonData.results;
        const finalDataJson = await Promise.all(
          jsonDataCharacters.map(async (character) => {
            const randomImageNumber = Math.floor(Math.random() * 100) + 1;
            return {
              ...character,
              image: `https://picsum.photos/200/300?random=${randomImageNumber}`
            };
          })
        );

        setData(finalDataJson);
        setNextUrl(jsonData.next);
        setPrevUrl(jsonData.previous);
        localStorage.setItem('currentUrl', url);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(currentUrl);
  }, [currentUrl]);

  return { data, nextUrl, prevUrl, setCurrentUrl };
};

export default useFetchData;

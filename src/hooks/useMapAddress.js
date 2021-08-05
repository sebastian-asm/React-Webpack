import { useState, useEffect } from 'react';

const useMapAddress = (address) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const apiUrl = `https://us1.locationiq.com/v1/search.php?key=pk.87b94cf59ada7e1a4f7fd7511b82915b&q=${address}&format=json&limit=1`;
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setMap(data[0]);
      });
  }, []);

  return map;
};

export default useMapAddress;

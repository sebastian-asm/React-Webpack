import { useState, useEffect } from 'react';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const apiUrl = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITION_STACK_ACCESS_KEY}&query=${address}&limit=1`;
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then(({ data }) => {
        setMap(data[0]);
      });
  }, []);

  return map;
};

export default useGoogleAddress;

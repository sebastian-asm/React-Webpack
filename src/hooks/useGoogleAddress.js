import { useState, useEffect } from 'react';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const apiUrl = `http://api.positionstack.com/v1/forward?access_key=6dbc38f2a053dc870bae3dd6f5007b76&query=${address}&limit=1`;
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then(({ data }) => {
        setMap(data[0]);
      });
  }, []);

  return map;
};

export default useGoogleAddress;

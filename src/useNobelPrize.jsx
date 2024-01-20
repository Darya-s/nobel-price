//https://api.nobelprize.org/2.1/laureates)

import { useState, useEffect } from 'react';
import axios from 'axios';

function useNobelPrize({ limit, offset }) {
  const [laureates, setLaureates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nobelprize.org/2.1/laureates?limit=${limit}&offset=${offset}`
        );

        setLaureates(response.data.laureates);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, offset]);

  return [laureates, loading, error];
}

export default useNobelPrize;

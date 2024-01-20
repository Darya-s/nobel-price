import { useState, useEffect } from 'react';
import axios from 'axios';

function useLaureate(laureateID) {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nobelprize.org/2.1//laureate/${laureateID}`
        );

        setPerson(response.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [laureateID]);

  return [person, loading, error];
}

export default useLaureate;

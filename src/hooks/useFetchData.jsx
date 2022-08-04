import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url) {
  const baseURL = url;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return { data };
}

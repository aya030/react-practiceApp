import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return { data };
}

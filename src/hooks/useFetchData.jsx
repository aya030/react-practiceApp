import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url) {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    instance.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return { data };
}

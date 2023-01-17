import { useState, useCallback } from 'react';
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://63b7adc04f17e3a931d999f3.mockapi.io/api/v1/',
});

export const useFetchHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState([]);

  const fetchData = useCallback(async (configobj) => {
    try {
      setIsLoading(true);
      const apiResponse = await api(configobj);
      setIsLoading(false);
      const data = apiResponse.data;
      setResponse(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  return { isLoading, response, fetchData };
};

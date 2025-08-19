import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = (city) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = 'https://api.openweathermap.org/data/2.5';

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const currentRes = await axios.get(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        setCurrentWeather(currentRes.data);

        const forecastRes = await axios.get(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        const dailyForecast = forecastRes.data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 5);
        setForecast(dailyForecast);
      } catch (err) {
        setError('City not found or API error');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { currentWeather, forecast, loading, error };
};

export default useWeather;
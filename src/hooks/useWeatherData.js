import { useState, useEffect, useCallback } from "react";

function useWeatherData(lat, long) {
  const [weatherData, setWeatherData] = useState({ data: null, error: "", loading: true });

  const getWeatherData = useCallback(async () => {
    try {
      setWeatherData({ ...weatherData, loading: true });
      if (lat && long) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&unit=metric&appid=fa64a9f13fe888dd729eb8e5a7f63362`
        );

        const data = await response.json();

        setWeatherData({ ...weatherData, data: data, error: "", loading: false });
      }
    } catch (error) {
      setWeatherData({ ...weatherData, error: error.message, loading: false });
    }
  }, [lat, long]);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return { weatherData: weatherData.data, error: weatherData.error, loading: weatherData.loading };
}

export default useWeatherData;

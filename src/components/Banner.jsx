import { useEffect, useState } from "react";

import useLocation from "../hooks/useLocation";
import useWeatherData from "../hooks/useWeatherData";

import {
  convertTimeStampToHours,
  getDateOrHour,
  convertKelvinToCelsius,
} from "../utility/utilityFunctions";

import { ShowImage } from "../components";

function Banner() {
  const location = useLocation();
  const { weatherData, error, loading } = useWeatherData(location.lat, location.long);

  const [dayOrNight, setIsDayOrNight] = useState({
    day: false,
    night: false,
    loading: true,
  });

  const today = getDateOrHour({ weekday: "long" }).split(" ")[0];
  const currentTime = getDateOrHour({ hour: "numeric", hour12: false });

  useEffect(() => {
    if (weatherData) {
      const sunrise = convertTimeStampToHours(weatherData.sys.sunrise);
      const sunset = convertTimeStampToHours(weatherData.sys.sunset);

      setIsDayOrNight(
        currentTime > sunrise && currentTime < sunset
          ? { ...dayOrNight, day: true, loading: false }
          : { ...dayOrNight, night: true, loading: false }
      );
    }
  }, [weatherData]);

  return (
    <header className="relative">
      <div>
        <ShowImage dayOrNight={dayOrNight} />
      </div>

      <div className="absolute top-0 w-full p-4 flex justify-between text-2xl font-medium">
        <h4 className="">{today}</h4>

        {error && <p className="text-red-500">{error}</p>}
        {loading && <p className="text-blue-500">Loading...</p>}
        {!loading && !error && (
          <h4 className="">
            {weatherData?.name.split(" ")[0]}{" "}
            {convertKelvinToCelsius(weatherData?.main.temp).toFixed(0)} °C
          </h4>
        )}
      </div>
    </header>
  );
}

export default Banner;

import { useEffect, useState } from "react";

import useLocation from "../hooks/useLocation";

import { ShowImage } from "./ShowImage";

export function Banner() {
  const loaction = useLocation();

  const [dayOrNight, setIsDayOrNight] = useState({
    day: false,
    night: false,
    loading: true,
  });

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const getWeatherData = async () => {
    console.log(loaction);
    // const { latitude, longitude } = getLatLang();
    // console.log(latitude, longitude);
    // const response = await fetch(
    //   `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,hourly,minutely&appid=f540a24d649a7effe0ea55fb2212fa3d
    //   `
    // );
    // const data = await response.json();
    // console.log(data);
  };

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: false,
    });

    setIsDayOrNight(
      currentTime > 6 && currentTime < 18
        ? { ...dayOrNight, day: true, loading: false }
        : { ...dayOrNight, night: true, loading: false }
    );

    getWeatherData();
  }, [dayOrNight.day, dayOrNight.night, dayOrNight.loading]);

  return (
    <header className="relative">
      <div>
        <ShowImage dayOrNight={dayOrNight} />
      </div>

      <div className="absolute top-0 w-full p-4 flex justify-between text-2xl font-medium">
        <h4 className="">{today}</h4>

        <h4 className="">Dhaka 24C</h4>
      </div>
    </header>
  );
}

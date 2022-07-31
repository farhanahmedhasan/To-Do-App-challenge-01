import { useState } from "react";

function useLocation() {
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) =>
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })
    ),
      (error) => {
        console.log(error);
      };
  }

  return location;
}

export default useLocation;

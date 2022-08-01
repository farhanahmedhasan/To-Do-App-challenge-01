import { useState, useEffect } from "react";

function useLocation() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude);
          setLong(pos.coords.longitude);
        },
        (err) => console.log(err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return { lat, long };
}

export default useLocation;

import { useState, useEffect } from "react";

function useLocation() {
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, long: pos.coords.longitude }),
        (err) => console.log(err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return { lat: location.lat, long: location.long };
}

export default useLocation;

import React from "react";

import BlurImage from "../assets/blur.jpg";
import NightImage from "../assets/night-img.png";
import DayImage from "../assets/day-img.png";

export function ShowImage({ dayOrNight }) {
  if (dayOrNight.loading) {
    return <img className="h-[460px] w-full" src={BlurImage} />;
  }

  if (dayOrNight.day) {
    return <img className="h-[460px] w-full" src={DayImage} />;
  }

  return <img className="h-[460px] w-full object-cover" src={NightImage} alt="A big image" />;
}

export default ShowImage;

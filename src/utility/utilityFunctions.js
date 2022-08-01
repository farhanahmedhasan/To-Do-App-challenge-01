export const convertTimeStampToHours = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();

  return hours;
};

export const IsOverDue = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
};

export const getDateOrHour = (options) => {
  return new Date().toLocaleTimeString("en-US", options);
};

export const convertKelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

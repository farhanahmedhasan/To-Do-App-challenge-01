export const IsOverDue = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
};

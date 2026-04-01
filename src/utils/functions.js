export function getRewardPoints(sales) {
  let points = 0;
  if (sales > 50 && sales <= 100) {
    points = sales - 50;
  } else if (sales > 100) {
    points = 50 + (sales - 100) * 2;
  }
  
  return points;
}

// dd/mm/yyyy ---> yyyy/mm/dd
export const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(`${year}/${month}/${day}`);
};

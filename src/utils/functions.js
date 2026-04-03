export function getRewardPoints(sales) {
  let points = 0;
  if (sales > 50 && sales <= 100) {
    points = sales - 50;
  } else if (sales > 100) {
    points = 50 + (sales - 100) * 2;
  }
  
  return points;
}

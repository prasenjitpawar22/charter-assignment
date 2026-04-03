import { isAfter, isEqual, parse } from "date-fns";

// filter date range of last X months --> eg: last 3 months, last 6 months, etc.
export function filterLastXMonths(
  data,
  months,
  dateFormat = "dd/MM/yyyy",
  dateKey = "orderDate",
) {

  if (months === 0) {
    return data;
  }

  const now = new Date();
  const cutoff = new Date();
  cutoff.setMonth(now.getMonth() - months);

  return data.filter((item) => {
    const dt = parse(item[dateKey], dateFormat, new Date());

    return isAfter(dt, cutoff) || isEqual(dt, cutoff);
  });
}

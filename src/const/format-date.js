export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // hour12: true,
  });
};

export const findGap = (start, end) => {
  const endDate = new Date(start);
  const startDate = new Date(end);

  const timeDifference = endDate - startDate;

  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

  return dayDifference;
};

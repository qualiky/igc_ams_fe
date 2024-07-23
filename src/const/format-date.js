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

export const formatTime = (dateString) => {
  const date = new Date(dateString);

  // Get hours, minutes, and seconds
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format the time as a string (e.g., "5:29:57 PM")
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
};

export const displayCount = (count) => {
  if (count >= 1000) {
    const displayCountString = (count / 1000).toFixed(1) + "k";
    return displayCountString;
  }
  return count.toString();
};

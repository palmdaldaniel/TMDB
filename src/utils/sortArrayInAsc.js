export const sortInAscOrder = (data) => {
  const sorted = data.sort((a, b) => {
    return b["vote_average"] - a["vote_average"];
  });

  return sorted;
};

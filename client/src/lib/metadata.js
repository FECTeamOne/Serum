const avrageStars = (reviewsMetadata) => {
  let totalStars = 0;
  const values = Object.values(reviewsMetadata.ratings);
  const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
  Object.entries(reviewsMetadata.ratings).forEach((item) => { totalStars += item[0] * item[1]; });
  const avgStars = totalStars / total;
  return avgStars;
};
const totalReviews = (reviewsMetadata) => {
  const values = Object.values(reviewsMetadata.ratings);
  const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
  return total;
};

export { avrageStars, totalReviews };

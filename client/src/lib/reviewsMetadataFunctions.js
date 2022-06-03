const calculateAverageStars = (reviewsMetadata) => {
  try {
    let totalStars = 0;
    const values = Object.values(reviewsMetadata.ratings);
    const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
    Object.entries(reviewsMetadata.ratings).forEach((item) => { totalStars += item[0] * item[1]; });
    const avgStars = totalStars / total;
    console.log(avgStars)
  } catch (error) {
  }
};
const calculateTotalReviews = (reviewsMetadata) => {
  try {
    const values = Object.values(reviewsMetadata.ratings);
    const total = values.reduce((num, totals) => Number(num) + Number(totals), 0);
    console.log(total);
  } catch (error) {
  }
};

export { calculateAverageStars, calculateTotalReviews };

import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Stars({ rating, size }) {
  const half = rating % 1 !== 0;
  const numOfStars = Math.floor(rating);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const val = i + 1;
        if (half && val === numOfStars + 1) {
          return <FaStarHalfAlt size={size} />;
        }
        return val <= rating ? <FaStar size={size} /> : <FaRegStar size={size} />;
      })}
    </div>
  );
}

export default Stars;

import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card my-10 lg:w-lg sm:w-sm bg-primary   shadow-xl">
      <div className="card-body">
        <p>{review.paragraph}</p>
        <div className="flex py-4">
          <img src={review.img} className="pr-5 w-20" alt="reviewer image" />
          <h2 className="card-title text-white">{review.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;

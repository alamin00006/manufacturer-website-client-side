import React from 'react';

const Review = ({myReview}) => {
    const {name, review ,  description}= myReview;
    return (
      <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">{name}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <p className='text-red-500'> {review} Star</p>
        </div>
      </div>
    </div>
    );
};

export default Review;
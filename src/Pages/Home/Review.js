import React from 'react';

const Review = ({myReview}) => {
    const {review, name , description, picture}= myReview;
    return (
        <div>
         <div class="avatar">
  <div class="w-48 rounded-xl">
    <img src={picture} alt='' />
  </div>
  <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{review}</p>
  </div>
</div>
        </div>
    );
};

export default Review;
import React from 'react';
import reviewImage from '../../assets/images/review.jpg'

const Review = ({myReview}) => {
    const {name, review ,  description}= myReview;
    return (
      <div class="card w-96 bg-rose-50	 shadow-xl mt-9">
      <div class="card-body">
      
      <div className='flex sm:flex-none'>

      <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={reviewImage} alt=''/>
  </div>
</div>

      <h2 class="card-title text-primary mx-5">{name}</h2>
      </div>
        
        <p>{description}</p>
        <div class="card-actions justify-end">
          <p className='text-red-500'> {review} Star</p>
        </div>
      </div>
    </div>
    );
};

export default Review;
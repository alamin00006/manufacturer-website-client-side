import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    
    useEffect(() =>{
        fetch('https://secure-anchorage-88576.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data =>setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-blue-600 text-5xl mt-5 text-center'>Our Coustomer Reviews </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                reviews.map(myReview => <Review
                     key={myReview._id} 
                     myReview = {myReview}
                ></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;
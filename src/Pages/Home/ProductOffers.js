import React from 'react';
import offer from '../../assets/images/offer2.jpg'
const ProductOffers = () => {
    return (
        <div className='text-5xl text-center w-full'>
            <h1 className=' text-blue-600 text-5xl my-5'>This Month Offers</h1>
            <h4 className='text-yellow-500 my-5'>Upto 1000 Parts to buy 50% free</h4>
            <img className='w-3/4 ml-36 flex text-center' src={offer} alt=''></img>
        </div>
    );
};

export default ProductOffers;
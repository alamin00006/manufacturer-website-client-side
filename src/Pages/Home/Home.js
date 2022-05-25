import React from 'react';

import Banner from './Banner';
import OurBusiness from './OurBusiness';
import ProductOffers from './ProductOffers';

import Reviews from './Reviews';
import Subscribe from './Subscribe';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <ProductOffers></ProductOffers>
            <OurBusiness></OurBusiness>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;
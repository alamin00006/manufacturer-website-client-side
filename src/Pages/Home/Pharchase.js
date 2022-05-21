import React from 'react';
import {useParams } from 'react-router-dom';
const Pharchase = () => {
    const {pharchaseDetails} = useParams()
    return (
        <div>
            <h1>pharchase {pharchaseDetails}</h1>
        </div>
    );
};

export default Pharchase;
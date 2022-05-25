import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [allOrder, setAllOrder] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data =>setAllOrder(data))
    }, [])


    return (
        <div>
            <h1>Manage All Orders {allOrder.length}</h1>
        </div>
    );
};

export default ManageAllOrders;
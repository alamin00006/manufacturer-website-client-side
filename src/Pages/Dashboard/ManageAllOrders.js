import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    
    useEffect(() =>{
        fetch('https://secure-anchorage-88576.herokuapp.com/order')
        .then(res => res.json())
        .then(data =>setAllOrders(data))
    }, [])

const statusUpdated = (id) =>{

    const status = 'shift'
    const url = `https://secure-anchorage-88576.herokuapp.com/order/${id}`;
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify({status})
          })
          .then(res => res.json())
          .then(data =>{
              console.log('success', data);
           
          })
      
}
    


    return (
        <div>
            <h1>Manage All Orders {allOrders.length}</h1>
            
                    <div class="overflow-x-auto">
                    <table class="table w-full">
                    
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Product Name</th>
                          <th>Product Quantity</th>
                          <th>Payment Status</th>
                          <th>Payment Receive</th>
                        </tr>
                      </thead>
                      <tbody>
                      {allOrders.map((allOrder, index) =><tr key={allOrder._id}>
                          <th>{index+1}</th>
                         
                          <td>{allOrder.customerName}</td>
                        <td>{allOrder.productName}</td>
                      <td>{allOrder.orderQuantity}</td>

                     <td>{!allOrder.paid && <button className='text-primary'>unpaid</button>}

                     {allOrder.paid && allOrder.status ==='pending' && <button className='text-primary'>{allOrder.status }</button>
                     }
                     {allOrder.paid && allOrder.status ==='shift' && <button className='text-primary'>{allOrder.status }</button>
                     }
                     </td>
                     
                       <td>
                       {allOrder.status ==='pending' && <button className='btn-primary btn' onClick={() =>statusUpdated(allOrder._id)}>Shift Now</button>}

                       </td>
                        </tr>)}
                      </tbody>
                    </table>
                  </div>
              
            
        </div>
    );
};

export default ManageAllOrders;
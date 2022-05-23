import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserOrder from './UserOrder';

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect( () =>{
        if(user){
            fetch(`http://localhost:5000/order?customer=${user.email}`)
        .then(res =>res.json())
        .then(data => setOrder(data))
        }
    }, [user])
    return (
        <div>
            <h1>ths is order page{orders.length}</h1>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product</th>
        <th>Price</th>

      </tr>
    </thead>
    <tbody>
     
      {
          orders.map( (order, index) => <UserOrder key={index}
          order ={order} index ={index}
          ></UserOrder>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;
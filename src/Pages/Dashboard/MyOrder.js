import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UserOrder from './UserOrder';

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect( () =>{
        if(user){
            fetch(`http://localhost:5000/order?customer=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res =>{
            if(res.status ===401 || res.status === 403){
            navigate('/');
            signOut(auth);
            localStorage.removeItem('accessToken')
            }
         return res.json()
        })
        .then(data => {
            setOrder(data)
        })
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
        <th>Payment</th>

      </tr>
    </thead>
    <tbody>
     
      {
          orders.map( (order, index) => <UserOrder key={order._id}
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
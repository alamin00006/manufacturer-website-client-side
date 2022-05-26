import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderDeleteModal from './OrderDeleteModal';
import UserOrder from './UserOrder';

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const [productDelete, setProductDelete] = useState(null)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect( () =>{
        if(user){
            fetch(`https://secure-anchorage-88576.herokuapp.com/order?customer=${user.email}`, {
                method: "GET",
                headers: {
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`
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
          orders.map( (order, index) => <UserOrder orders={orders} setOrder={setOrder} key={order._id}
          order ={order} index ={index}
          setProductDelete={setProductDelete}
          ></UserOrder>)
      }
    </tbody>
  </table>
</div>
{
  productDelete && <OrderDeleteModal setProductDelete={setProductDelete} setOrder={setOrder} orders={orders} productDelete={productDelete}></OrderDeleteModal>
}
        </div>
    );
};

export default MyOrder;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserOrder = ({order, index}) => {
 
  const {_id,customerName, customer, productName, price} = order;
  const navigate = useNavigate();

  const paymentHandle = ()=>{
    navigate(`payment/${_id}`)
  }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{customerName}</td>
        <td>{customer}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{price && <button onClick={paymentHandle} className='btn btn-primary'>Pay</button>}</td>
        </tr>
    );
};

export default UserOrder;
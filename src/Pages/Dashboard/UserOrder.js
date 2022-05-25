import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserOrder = ({order, index, setOrder, orders, setProductDelete}) => {
 
  const {_id, customerName, customer, productName, price,paid, transactionId} = order;
  const navigate = useNavigate();
  
  const paymentHandle =() =>{
    
    navigate(`/dashboard/payment/${_id}`)
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{customerName}</td>
        <td>{customer}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>
      
        {(price && !paid) && <button onClick={paymentHandle} class="btn btn-primary">Pay</button>} 
       
       
       {(price && paid)? <div><p>
         <span className='text-success'>Paid</span></p>         
         <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
         </div>:  <label onClick={() =>setProductDelete(order)} for="my-modal-6" class="btn modal-button">Cancel</label>} 


        </td>

        </tr>
    );
};

export default UserOrder;
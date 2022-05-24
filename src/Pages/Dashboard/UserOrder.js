import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserOrder = ({order, index}) => {
 
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
        
        

        {(price && !paid) && <button onClick={paymentHandle} class="btn btn-primary"><Link to="/purchase">Pay</Link></button>} 
       
       {(price && paid) && <div><p>
         <span className='text-success'>Paid</span></p>         
         <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
         </div>} 


        </td>

        </tr>
    );
};

export default UserOrder;
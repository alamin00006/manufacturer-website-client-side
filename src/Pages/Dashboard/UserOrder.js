import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserOrder = ({order, index, setOrder, orders}) => {
 
  const {_id, customerName, customer, productName, price,paid, transactionId} = order;
  const navigate = useNavigate();
  
  const handleDelete = (id) =>{
    const confirm = window.confirm('Are you Sure Delete me?');
    if(confirm){
        const url = `http://localhost:5000/order/${id}`;
        fetch(url , {
            method: "DELETE",
          }).then(res => res.json())
            .then(data => {
                if(data.deletedCount >0 ){
                   const reaminingData = orders.filter(computer => computer._id !==id);
                   setOrder(reaminingData)
                }
            })
         }
    }

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
        {(price && !paid) && <button className="btn bg-yellow-500 mx-2 text-red-500" onClick={ () =>handleDelete(_id)}>Cancel</button>} 
       
       {(price && paid) && <div><p>
         <span className='text-success'>Paid</span></p>         
         <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
         </div>} 


        </td>

        </tr>
    );
};

export default UserOrder;
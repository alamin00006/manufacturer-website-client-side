import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Pharchase = () => {
    const [user] = useAuthState(auth);
    const {pharchaseId} = useParams()
    const [oneParts, setOneParts] = useState({});
    const [error, setError] = useState('');
 const [reload, setReload] = useState(true);


 useEffect( () =>{
     const url = `http://localhost:5000/parts/${pharchaseId}`;
     fetch(url)
     .then(res =>res.json())
     .then(data =>setOneParts(data))
    
 }, [reload])
  const minimumQuantityError = <p className='text-red-500'>Please more than order</p>
  const bigQuantityError = <p className='text-red-500'>No Available Stock</p>
const handleNewQuantity = () =>{
  const stock = parseInt(oneParts.AvailableStock)
  const newQuantity1 = parseInt(oneParts.newQuantity||oneParts.minimumQuantity)
 
  if(oneParts.minimumQuantity > newQuantity1){
   return setError(minimumQuantityError) ;
  }
  if(stock < newQuantity1){
    return setError(bigQuantityError)
  }
  else{
    const quantity = newQuantity1 + 1;
    const newQuantity = {quantity};
    const url = `http://localhost:5000/parts/${pharchaseId}`;
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newQuantity)
          })
          .then(res => res.json())
          .then(data =>{
              console.log('success', data);
             setReload(!reload)
          })
          setError('')
  }
  
  }


 const deliverdHandle = () =>{

 
    const quantity = parseInt(oneParts?.newQuantity)-1;
  console.log(quantity)
  if(quantity < oneParts.minimumQuantity){
    return setError(minimumQuantityError)
  }
  else{
    const updateQuantity = {quantity}
  const url = `http://localhost:5000/parts/${pharchaseId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
           
            setReload(!reload)
        })
        setError('')
  }
 
  
  
 }


    return (
        <div className='text-center bg-red-200'>
          <h1 className='text-primary text-3xl'>Phurchase Page</h1>
          
          <p> Minimum Order :{oneParts.minimumQuantity}</p>
          <p> Order Quantity:{oneParts.newQuantity}</p>
           <p> Available Stock: {oneParts.AvailableStock}</p>
           <p> Price: {oneParts.unitPrice}</p>
           {error}
           <button onClick={deliverdHandle} className='btn btn-warning text-5xl'>-</button>
           <button onClick={handleNewQuantity} className='btn btn-warning text-5xl'>+</button>

           {/* <form>
           <p>Name : <input type="text" disabled name="name" value={user?.displayName} id="" /></p>
           <p>Email : <input type="email" disabled name="email" value={user?.email} id="" /></p>
           <p>Phone: <input type="text" placeholder='phone number' name="phone" id="" /></p>
           <br />
           <p>Address : <textarea type="text" placeholder='address' name="address" id="" /></p>
                    
           <br />
           <input className='btn btn-primary' type="submit" value="Pay Now" />
          
          </form> */}
          <p>
          {(oneParts.unitPrice && !oneParts.paid) && <Link to={`/payment/${pharchaseId}`}><button>Pay Now</button></Link>}
          
          {(oneParts.unitPrice && oneParts.paid) && <button>Paid</button>}
          </p>

        </div>
    );
    };
export default Pharchase;
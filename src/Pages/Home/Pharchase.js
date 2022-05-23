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
const handleNewQuantity = (event) =>{
  event.preventDefault();
  const stock = parseInt(oneParts.AvailableStock)
  const newQuantity1 = parseInt(event.target.quantity.value)
 
  if(oneParts.minimumQuantity > newQuantity1){
   return setError(minimumQuantityError) ;
  }
  if(stock < newQuantity1){
    return setError(bigQuantityError)
  }
  else{
    const quantity = newQuantity1 + parseInt(oneParts.minimumQuantity);
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
          event.target.reset()
  }
  
  }


 const deliverdHandle = () =>{
  
    const quantity = parseInt(oneParts?.newQuantity)-1;
  

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
          
           <form onSubmit={handleNewQuantity}>
            <input type="text" className='w-60 border rounded'  name="quantity" id="" />
            <input className='btn btn-primary ml-2' type="submit" value="Quantity increase" />
           </form>

          
         

        </div>
    );
    };
export default Pharchase;
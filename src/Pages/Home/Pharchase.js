import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Pharchase = () => {
    const [user] = useAuthState(auth);
    const {pharchaseId} = useParams()
    const [oneParts, setOneParts] = useState({});
    const [error, setError] = useState('');
 const [reload, setReload] = useState(true);

console.log(pharchaseId)
 useEffect( () =>{
     const url = `http://localhost:5000/parts/${pharchaseId}`;
     fetch(url,{
       method:"GET",
       headers: {
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
    }
     })
     .then(res =>res.json())
     .then(data =>setOneParts(data))
    
 }, [reload])
  const minimumQuantityError = <p className='text-red-500'>Please more than order</p>
  const bigQuantityError = <p className='text-red-500'>No Available Stock</p>

const handleOrder = (event) =>{
event.preventDefault();

const orderData = {
    orderId : oneParts._id ,
    productName: oneParts.name,
    price : oneParts.unitPrice,
    customerName : user?.displayName,
    customer : user?.email,
    address: event.target.address.value,
    phone: event.target.phone.value,

}
fetch('http://localhost:5000/order', {
method: 'POST',
headers:{
  'content-type': 'application/json'
},
body: JSON.stringify(orderData)
})
.then(res =>res.json())
.then(data => {
  console.log(data)
  if(data.success){
   toast.success('Your Order is Done')
  }
  else{
   toast.error('Allready this item orderd')
  }
})

}

const handleIncreaseQuantity = (event) =>{
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


 const handleDecreseQuantity = () =>{
  
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
          
          <p> product Name :{oneParts.name}</p>
          <p> Minimum Order :{oneParts.minimumQuantity}</p>
          <p> Order Quantity:{oneParts.newQuantity}</p>
           <p> Available Stock: {oneParts.AvailableStock}</p>
           <p> Unit Price: {oneParts.unitPrice}</p>
           {error}
           <button onClick={handleDecreseQuantity} className='btn btn-warning text-5xl'>-</button>
          
           <form onSubmit={handleIncreaseQuantity}>
            <input type="text" className='w-60 border rounded'  name="quantity" id="" />
            <input className='btn btn-primary ml-2' type="submit" value="Quantity increase" />
           </form>

          <div>
            <form onSubmit={handleOrder}>
           <p>Name :  <input type="text" disabled value={user?.displayName} name="" id="" /></p>
           <p>Email : <input type="email" disabled value={user?.email} name="" id="" /></p>
          <p>Address :  <textarea type="email" placeholder='your address' name="address" id="" /></p>
           <p>Phone : <input type="number" placeholder='phone number' name="phone" id="" /></p>
          <p>Price : <input type="text" disabled value={oneParts.unitPrice} name="" id="" /></p>
                <input className='btn btn-primary' type="submit" value="Order" name="" id="" />
            </form>
          </div>
          
         

        </div>
    );
    };
export default Pharchase;
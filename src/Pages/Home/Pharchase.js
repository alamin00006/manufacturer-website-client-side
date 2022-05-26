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
     const url = `https://secure-anchorage-88576.herokuapp.com/parts/${pharchaseId}`;
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
    orderQuantity: event.target.orderQuantity.value,

}
fetch('https://secure-anchorage-88576.herokuapp.com/order', {
method: 'POST',
headers:{
  'content-type': 'application/json',
  authorization : `Bearer ${localStorage.getItem('accessToken')}`

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
    const url = `https://secure-anchorage-88576.herokuapp.com/parts/${pharchaseId}`;
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
  const url = `https://secure-anchorage-88576.herokuapp.com/parts/${pharchaseId}`;
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
        <div className='text-center bg-red-200 flex justify-center'>
        <div>
        <h1 className='text-primary text-3xl'>Phurchase Page</h1>
          
          <div className='flex'>
            <div>
              <img className='w-48' src={oneParts.picture} alt=""/>
            </div>
            <div><p> product Name :{oneParts.name}</p>
          <p> Minimum Order :{oneParts.minimumQuantity}</p>
          <p> Order Quantity:{oneParts.newQuantity}</p>
           <p> Available Stock: {oneParts.AvailableStock}</p>
           <p> Unit Price: {oneParts.unitPrice}</p>
           {error}
           <button onClick={handleDecreseQuantity} className='btn btn-primary'>Decrease</button>
          
           </div>
          </div>
           
           <form onSubmit={handleIncreaseQuantity}>
            <input type="text" className='w-60 border rounded mt-5 p-3' placeholder='Your Order Quantity' name="quantity" id="" />
            <input className='btn btn-primary mx-2 ' type="submit" value="Quantity increase" />
           </form>
        </div>

          <div>
         
<form onSubmit={handleOrder}>
<label class="label">
    <span class="label-text">Name</span>
    
  </label>
  <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />

<label class="label">
    <span class="label-text">Email</span>
    
  </label>
  <input type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
  
<label class="label">
    <span class="label-text">Address</span>
    
  </label>
  <input type="text"placeholder='your address' name="address" class="input input-bordered w-full max-w-xs" />
  
<label class="label">
    <span class="label-text">Order Quantity</span>
    
  </label>
  <input type="text" disabled value={oneParts.newQuantity} name="orderQuantity" class="input input-bordered w-full max-w-xs" />
<label class="label">
    <span class="label-text">Phone</span>
    
  </label>
  <input type="number" placeholder='phone number' name="phone" class="input input-bordered w-full max-w-xs" />
<label class="label">
    <span class="label-text">Price</span>
    
  </label>
  <input type="text" disabled value={oneParts.unitPrice} class="input input-bordered w-full max-w-xs" />
  

  <input className='btn btn-secondary mt-2 pointer' type="submit" value="Order" class="input input-bordered max-w-xs" />
  </form>
  </div>
          
         

        </div>
    );
    };
export default Pharchase;
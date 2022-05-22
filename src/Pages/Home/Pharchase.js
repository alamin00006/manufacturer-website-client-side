import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Pharchase = () => {
    const [user] = useAuthState(auth);
    const {pharchaseId} = useParams()
    const [oneParts, setOneParts] = useState({});
//  const [reload, setReload] = useState(true);


 useEffect( () =>{
     const url = `http://localhost:5000/parts/${pharchaseId}`;
     fetch(url)
     .then(res =>res.json())
     .then(data =>setOneParts(data))
    
 }, [])

// const handleNewQuantity = (event) =>{
//   event.preventDefault();
//   const quantity = parseInt(event.target.quantity.value)+ parseInt(oneParts.quantity);
//   const newQuantity = {quantity};
//   const url = `http://localhost:5000/parts/${pharchaseId}`;
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newQuantity)
//         })
//         .then(res => res.json())
//         .then(data =>{
//             console.log('success', data);
//         //    setReload(!reload)
//            event.target.reset()
//         })
// }



//  const deliverdHandle = () =>{

 
//     const quantity = parseInt(oneParts.quantity)-1;
//   console.log(quantity)
 
//   const updateQuantity = {quantity}
//   const url = `http://localhost:5000/parts/${pharchaseId}`;
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updateQuantity)
//         })
//         .then(res => res.json())
//         .then(data =>{
//             console.log('success', data);
           
//             // setReload(!reload)
//         })
  
//  }


    return (
        <div className='container manage-product'>
           
           <h4> Product Name : {oneParts.name}</h4>
           <img src={oneParts.picture} alt="" />
           <p> Descripiton :{oneParts.description}</p>
           <p> Minimum Order :{oneParts.minimumQuantity}</p>
           <p> Available Stock: {oneParts.AvailableStock}</p>
           <p> unit Price: {oneParts.unitPrice}</p>
           
           <p> Price :{oneParts.price}</p>
          <form>
          <input type="number" name = "quantity"  />
          <input type="text" value={user?.email}  />
           <br />
           <input className='btn btn-primary' type="submit" value="newQuantity" />
          </form>
           
           <button className='btn btn-warning'>Deliverd</button>
        </div>
    );
    };
export default Pharchase;
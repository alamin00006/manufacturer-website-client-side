import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
   
    // "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F7719&psig=AOvVaw32AzT0MsLxk31_p-C-T_Hd&ust=1652034150412000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDB6viAzvcCFQAAAAAdAAAAABAD",
    // "unitPrice": 37,
    // "quantity": 39,
    // "minimumQuantity": 38,
    // "name": "Cooper Hampton",
    // "AvailableStock": 808,
    // "description": 
     
 const handleNewProduct = (event) =>{
     event.preventDefault();
     const name = event.target.name.value;
     const picture = event.target.picture.value;
     const description = event.target.description.value;
      const minimumQuantity = event.target.minimumQuantity.value;
     const AvailableStock = event.target.AvailableStock.value;
    //  const quantity = parseInt(Stock)

     const unitPrice = event.target.unitPrice.value;
     

     const newItem = {name,picture,description,unitPrice, minimumQuantity, AvailableStock};
    const url = 'http://localhost:5000/parts/';
     fetch(url , {
        method: "POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newItem)
      }).then(res => res.json())
        .then(data => {
           
            console.log(data)
            
            event.target.reset()
        })
    
        
       
 }
    return (
        <div className='text-center text-xl'>
            <h1 className='text-primary mt-5 text-3xl'>Add New Item</h1>
            <form className='mt-5 bg-accent py-5 border rounded' onSubmit={handleNewProduct}>
                <p>Product Name : <input className='px-5' type="text" name="name" id="" placeholder='name'/><br /></p>
                
                <br />
               <p>Description : <textarea type="text" className='px-5' name="description" 
                placeholder='description' id="" /></p>
                <br />
                <p>Available Stock : <input type="text" className='px-5' name="AvailableStock" placeholder='Available Stock' id="" /></p>
                <br />
                 <p> Minimum Quantity :<input type="text" className='px-5' name="minimumQuantity" placeholder='Minimum Quantity' id="" /></p>
                <br />
                <p> unitPrice : <input type="text" className='px-5' name="unitPrice" placeholder='Unit Price' id="" /></p>
                <br />
                <p>Product Image :  <input type="text" className='px-5' name="picture" placeholder='image url' id="" /></p>
                <br />
                 <input className='btn btn-primary' type="submit" value="Add New Item" />
                </form>
           
        </div>
    );
};

export default AddProduct;
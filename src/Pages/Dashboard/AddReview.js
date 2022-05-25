import React, { useState } from 'react';


const AddProduct = () => {
 const [error, setError] = useState('')

 const p = <p className='text-red-500'>Ratins give you under 5 or 5</p>
 const handleNewProduct = (event) =>{
     event.preventDefault();
     const name = event.target.name.value;
     const review = event.target.review.value;
     const picture = event.target.picture.value;
     const description = event.target.description.value;
     const newItem = {name,picture,description,review};
     if(review > 5){
        return setError(p)
     }
     else{
        const url = 'http://localhost:5000/reviews/';
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
    
        setError('') 
     }
     
    
       
 }
    return (
        <div className='text-center text-xl'>
            <h1 className='text-primary mt-5 text-3xl'>Add New Item</h1>
            <form className='mt-5 bg-accent py-5 border rounded' onSubmit={handleNewProduct}>
                <p>Your Name : <input className='px-5' type="text" name="name" id="" placeholder='name'/><br /></p>
                <p>Your Ratings : <input className='px-5 mt-2' type="number" name="review" id="" placeholder='Your Ratings'/><br /></p>
                {error}
                
                <br />
               <p>Description : <textarea type="text" className='px-5' name="description" 
                placeholder='description' id="" /></p>
                <br />
                <p>Your Image :  <input type="text" className='px-5' name="picture" placeholder='image url' id="" /></p>
                <br />
                 <input className='btn btn-primary' type="submit" value="Add New Item" />
                </form>
           
        </div>
    );
};

export default AddProduct;
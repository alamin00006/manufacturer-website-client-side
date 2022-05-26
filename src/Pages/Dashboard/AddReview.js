import React, { useState } from 'react';


const AddProduct = () => {
 const [error, setError] = useState('')

 const p = <p className='text-red-500'>Ratins give you under 5 or 5</p>
 const handleNewProduct = (event) =>{
     event.preventDefault();
   
     const review = event.target.review.value;
     const name = event.target.name.value;
     
     const description = event.target.description.value;
     const newItem = {name,description,review};
     if(review > 5){
        return setError(p)
     }
     else{
        const url = 'https://secure-anchorage-88576.herokuapp.com/reviews/';
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
            <h1 className='text-primary mt-5 text-3xl'>Add A Review</h1>
            <form className='mt-5 bg-accent py-5 border rounded' onSubmit={handleNewProduct}>
             
            <p>Your Ratings : <input className='px-5 my-2' type="text" name="name" id="" placeholder='Your Name'/><br /></p>
               <p>Description : <textarea type="text" className='px-5 mt-2' name="description" 
                placeholder='description' id="" /></p>
      
                <p>Your Ratings : <input className='px-5 mt-2' type="number" name="review" id="" placeholder='Your Ratings'/><br /></p>
                {error}
               
                 <input className='btn btn-primary mt-2' type="submit" value="Add a Review" />
                </form>
           
        </div>
    );
};

export default AddProduct;
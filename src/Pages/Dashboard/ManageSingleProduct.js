import React from 'react';

const ManageSingleProduct = ({tool, tools, setTools, setProductDelete}) => {
    const {_id, name, picture, unitPrice, minimumQuantity,AvailableStock, description} = tool;
  
     return (
         <div class="card w-96 bg-base-100 shadow-xl ">
   <figure class="px-10 pt-10">
     <img src={picture} alt="/" class="rounded-xl" />
   </figure>
   <div class="card-body items-center text-center">
     <h2 class="card-title">{name}</h2>
     <p>Unit Price: ${unitPrice}</p>
     <p>Stock: {AvailableStock}</p>
     <p>Minimum Order : {minimumQuantity}</p>
     <p>{description.slice(0,50)}</p>
     <div class="card-actions">
      

       <label onClick={() =>setProductDelete(tool)} for="my-modal-6" class="btn modal-button">Delete</label>
       
     </div>
   </div>
 </div>
     );
};

export default ManageSingleProduct;
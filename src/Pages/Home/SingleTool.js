import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleTool = ({tool}) => {
    const {_id, name, picture, unitPrice, quantity, minimumQuantity,AvailableStock, description} = tool;
   const navigate = useNavigate()
const pharchase =() =>{
navigate(`purchase/${_id}`)

}

    return (
        <div class="card w-96 bg-rose-50 my-5 shadow-xl ">
  <figure class="px-10 pt-10">
    <img src={picture} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>Unit Price: ${unitPrice}</p>
    <p>Stock: {AvailableStock}</p>
    <p>Minimum Order : {minimumQuantity}</p>
    <p>{description.slice(0,50)}</p>
    <div class="card-actions">
      <button onClick={pharchase} class="btn btn-secondary text-xl font-bold "><Link to="/purchase">Pharchase Now</Link></button>
      
    </div>
  </div>
</div>
    );
};

export default SingleTool;
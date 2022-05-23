import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/parts/${id}`;
    const {data, isLoading} = useQuery(['parts', id], ()=> fetch(url, {
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
    }).then(res=>res.json()))
    console.log(data)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;